import {
  WordPressHtml,
  getWpFooterHtml,
  getWpHeaderHtml,
  getWpHomeMainHtml,
} from "@/components/wp/WordPressHtml";
import { WpNavigationEnhancer } from "@/components/wp/WpNavigationEnhancer";

export function WpHomePage() {
  return (
    <>
      <WpNavigationEnhancer />
      <div className="wp-site-blocks">
        <WordPressHtml html={getWpHeaderHtml()} />
        <WordPressHtml html={getWpHomeMainHtml()} />
        <WordPressHtml html={getWpFooterHtml()} />
      </div>
    </>
  );
}
