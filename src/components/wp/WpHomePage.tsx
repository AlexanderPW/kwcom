import {
  WordPressHtml,
  getWpFooterHtml,
  getWpHomeMainHtml,
} from "@/components/wp/WordPressHtml";
import { WpAnimateEnhancer } from "@/components/wp/WpAnimateEnhancer";
import { WpDuotoneFilters } from "@/components/wp/WpDuotoneFilters";
import { Header } from "@/components/layout/Header";

export function WpHomePage() {
  return (
    <>
      <Header />

      <WpDuotoneFilters />
      <WpAnimateEnhancer />
      <div className="wp-site-blocks">
        <WordPressHtml html={getWpHomeMainHtml()} />
        <WordPressHtml html={getWpFooterHtml()} />
      </div>
    </>
  );
}
