export interface HTMLLinkTypes {
  /**
   * - *[Firefox, Internet Explorer]* If the element is `<link>` and the `rel` attribute also contains the `stylesheet` type, the link defines an alternative style sheet; in that case the title attribute must be present and not be the empty string.
   * - If the `type` is set to `application/rss+xml` or `application/atom+xml`, the link defines a syndication feed. The first one defined on the page is the default.
   * - Otherwise, the link defines an alternative page, of one of these types:
   *   - for another medium, like a handheld device (if the `media` attribute is set)
   *   - in another language (if the `hreflang` attribute is set)
   *   - in another format, such as a PDF (if the `type` attribute is set)
   *   - a combination of these
   */
  alternate: HTMLAnchorElement | HTMLAreaElement | HTMLLinkElement;
  /**
   * Defines a hyperlink to a document that contains an archive link to this one.
   * For example, a blog entry could link to a monthly index page this way.
   *
   * @deprecated
   */
  archives: HTMLAnchorElement | HTMLAreaElement | HTMLLinkElement;
  /**
   * Defines a hyperlink to a page describing the author or providing a way to contact the author.
   */
  author: HTMLAnchorElement | HTMLAreaElement | HTMLLinkElement;
  /**
   * Indicates that the hyperlink is a permalink for the nearest ancestor `<article>` element.
   * If none, it is a permalink for the `section` that the element is most closely associated to.
   * This allows for bookmarking a single article in a page containing multiple articles, such as on a monthly summary blog page, or a blog aggregator.
   */
  bookmark: HTMLAnchorElement | HTMLAreaElement;
  /**
   * @reference [Wikipedia](https://en.wikipedia.org/wiki/Canonical_link_element)
   *
   * A canonical link element is an HTML element that helps webmasters prevent duplicate content issues by specifying the "canonical" or "preferred" version of a web page as part of search engine optimization.
   */
  canonical: HTMLLinkElement;
  /**
   * Hints to the browser that a resource is needed, allowing the browser to do a DNS lookup and protocol handshaking before a user clicks the link.
   *
   * @experimental
   */
  'dns-prefetch': HTMLLinkElement;
  /**
   * Indicates that the hyperlink leads to a resource outside the site of the current page; that is, following the link will make the user leave the site.
   */
  external: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement;
  /**
   * Indicates that the hyperlink leads to the first resource of the sequence the current page is in.
   *
   * @deprecated
   */
  first: HTMLAnchorElement | HTMLAreaElement | HTMLLinkElement;
  /**
   * - If the element is `<a>` or `<area>`, it indicates that the hyperlink leads to a resource giving further help about the parent of the element, and its descendants.
   * - If the element is `<link>` it indicates that the hyperlink leads to a resource giving further help about the page as a whole.
   */
  help: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement | HTMLLinkElement;
  /**
   * Defines a resource for representing the page in the user interface, usually an icon (auditory or visual).
   * In the browser, it is usually referred to as the `favicon`.
   */
  icon: HTMLLinkElement;
  /**
   * HTML Imports is intended to be the packaging mechanism for web components, but you can also use HTML Imports by itself.
   *
   * @experimental
   */
  import: HTMLLinkElement;
  /**
   * Indicates that the page is part of a hierarchical structure and that the hyperlink leads to the top level resource of that structure.
   *
   * @deprecated
   */
  index: HTMLAnchorElement | HTMLAreaElement | HTMLLinkElement;
  /**
   * Indicates that the hyperlink leads to the last resource of the sequence the current page is in.
   *
   * @deprecated
   */
  last: HTMLAnchorElement | HTMLAreaElement | HTMLLinkElement;
  /**
   * Indicates that the hyperlink leads to a document describing the licensing information.
   * If not inside the `<head>` element, the standard doesn't distinguish between a hyperlink applying to a specific part of the document or to the document as a whole. Only the data on the page can indicate this.
   */
  license: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement | HTMLLinkElement;
  /**
   * Indicates that the linked file is a Web App Manifest.
   */
  manifest: HTMLLinkElement;
  /**
   * Initiates early (and high-priority) loading of module scripts.
   */
  modulepreload: HTMLLinkElement;
  /**
   * Indicates that the hyperlink leads to the next resource of the sequence the current page is in.
   */
  next: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement | HTMLLinkElement;
  /**
   * Indicates that the linked document is not endorsed by the author of this one, for example if it has no control over it, if it is a bad example or if there is commercial relationship between the two (sold link).
   */
  nofollow: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement;
  /**
   * Instructs the browser to open the link without granting the new browsing context access to the document that opened it — by not setting the `Window.opener` property on the opened window (it returns `null`).
   * This is especially useful when opening untrusted links, in order to ensure they cannot tamper with the originating document via the `Window.opener` property, while still providing the Referer HTTP header (unless `noreferrer` is used as well).
   * Note that when `noopener` is used, nonempty target names other than `_top`, `_self`, and `_parent` are all treated like `_blank` in terms of deciding whether to open a new window/tab.
   */
  noopener: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement;
  /**
   * Prevents the browser, when navigating to another page, to send this page address, or any other value, as referrer via the `Referer:` HTTP header.
   */
  noreferrer: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement;
  /**
   * Reverts implicit `rel="noopener"` addition on links with `target="_blank"`.
   *
   * @experimental
   */
  opener: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement;
  /**
   * Defines an external resource URI to call if one wishes to make a comment or a citation about the webpage. The protocol used to make such a call is defined in the [Pingback 1.0](http://www.hixie.ch/specs/pingback/pingback) specification.
   */
  pingback: HTMLLinkElement;
  /**
   * Provides a hint to the browser suggesting that it open a connection to the linked web site in advance, without disclosing any private information or downloading any content, so that when the link is followed the linked content can be fetched more quickly.
   *
   * @experimental
   */
  preconnect: HTMLLinkElement;
  /**
   * Suggests that the browser fetch the linked resource in advance, as it is likely to be requested by the user.
   */
  prefetch: HTMLLinkElement;
  /**
   * Tells the browser to download a resource because this resource will be needed later during the current navigation.
   */
  preload: HTMLLinkElement;
  /**
   * Suggests that the browser fetch the linked resource in advance, and that it also render the prefetched content offscreen so it can be quickly presented to the user once needed.
   *
   * @experimental
   */
  prerender: HTMLLinkElement;
  /**
   * Indicates that the hyperlink leads to the preceding resource of the sequence the current page is in.
   */
  prev: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement | HTMLLinkElement;
  /**
   * Indicates that the hyperlink references a document whose interface is specially designed for searching in this document, or site, and its resources.
   */
  search: HTMLAnchorElement | HTMLAreaElement | HTMLFormElement | HTMLLinkElement;
  /**
   * @see {@link https://code.google.com/archive/p/shortlink/wikis/Specification.wiki|`shortlink` Specification}
   */
  shortlink: HTMLLinkElement;
  /**
   * Indicates that the hyperlink leads to a resource that would be better suited for a secondary browsing context, like a sidebar.
   * Browsers, that don't have such a context will ignore this keyword.
   *
   * @deprecated
   */
  sidebar: HTMLAnchorElement | HTMLAreaElement | HTMLLinkElement;
  /**
   * Defines an external resource to be used as a stylesheet.
   * If the `type` is not set, the browser should assume it is a `text/css` stylesheet until further inspection.
   */
  stylesheet: HTMLLinkElement;
  /**
   * Indicates that the hyperlink refers to a document describing a tag that applies to this document.
   */
  tag: HTMLAnchorElement | HTMLAreaElement;
  /**
   * Indicates that the page is part of a hierarchical structure and that the hyperlink leads to the higher level resource of that structure.
   *
   * @deprecated
   */
  up: HTMLAnchorElement | HTMLAreaElement | HTMLLinkElement;
}

/**
 * An empty element is an element from HTML, SVG, or MathML that cannot have any child nodes (i.e., nested elements or text nodes).
 * In HTML, using a closing tag on an empty element is usually invalid. For example, `<input type="text"></input>` is invalid HTML.
 */
export type HTMLEmptyElementTagName =
  | 'area'
  | 'base'
  | 'br'
  | 'col'
  | 'embed'
  | 'hr'
  | 'img'
  | 'input'
  | 'keygen'
  | 'link'
  | 'meta'
  | 'param'
  | 'source'
  | 'track'
  | 'wbr';
