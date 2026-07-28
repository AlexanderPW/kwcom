import {
  WordPressHtml,
  getWpFooterHtml,
  getWpHeaderHtml,
  getWpHomeMainHtml,
} from "@/components/wp/WordPressHtml";
import { WpAnimateEnhancer } from "@/components/wp/WpAnimateEnhancer";
import { WpDuotoneFilters } from "@/components/wp/WpDuotoneFilters";
import { WpNavigationEnhancer } from "@/components/wp/WpNavigationEnhancer";

export function WpHomePage() {
  return (
    <>
      <WpDuotoneFilters />
      <WpAnimateEnhancer />
      <WpNavigationEnhancer />
      <div className="wp-site-blocks">
        <WordPressHtml html={getWpHeaderHtml()} />
        <WordPressHtml html={getWpHomeMainHtml()} />
        <WordPressHtml html={getWpFooterHtml()} />
      </div>
    </>
  );
}
