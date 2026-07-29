import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// SMTP needs a real TCP socket, which is only available on the Node.js runtime
// (the Edge runtime cannot open SMTP connections).
export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  contactMethod?: string;
  reason?: string;
  workedWithCoach?: string;
  service?: string;
  referral?: string;
  // Honeypot — bots fill this, humans never see it.
  company?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept spam caught by the honeypot.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const reason = data.reason?.trim();

  if (!name || !email || !reason) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: missing SMTP environment variables.");
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // 465 uses implicit TLS; 587 uses STARTTLS (secure: false + upgrade).
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string | undefined][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", data.phone?.trim()],
    ["Preferred contact method", data.contactMethod],
    ["Worked with a coach before", data.workedWithCoach],
    ["Interested in", data.service],
    ["Heard about Kelsey via", data.referral?.trim()],
    ["Why coaching now", reason],
  ];

  const html = `
    <h2 style="font-family:sans-serif">New contact form submission</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .filter(([, value]) => value)
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;vertical-align:top;color:#666"><strong>${label}</strong></td><td style="padding:4px 0">${escapeHtml(
              String(value),
            ).replace(/\n/g, "<br>")}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  const text = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  try {
    await transporter.sendMail({
      // From must be an address you're authorized to send as (your SMTP user).
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_TO || SMTP_USER,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text,
      html,
    });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
