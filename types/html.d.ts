import { HTMLGlobalAttributes } from './global';

export interface AnchorHTMLAttributes extends HTMLGlobalAttributes {
  /**
   * Prompts the user to save the linked URL instead of navigating to it. Can be used with or without a value:
   * - Without a value, the browser will suggest a filename/extension, generated from various sources:
   *   - The `Content-Disposition` HTTP header
   *   - The final segment in the URL `path`
   *   - The media type (from the `Content-Type` header, the start of a `data:` URL, or `Blob.type` for a `blob:` URL)
   * - Defining a value suggests it as the filename. `/` and `\` characters are converted to underscores (`_`).
   *   Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.
   */
  download?: string;
  /**
   * The URL that the hyperlink points to.
   * Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:
   * - Sections of a page with fragment URLs
   * - Pieces of media files with media fragments
   * - Telephone numbers with `tel:` URLs
   * - Email addresses with `mailto:` URLs
   * - While web browsers may not support other URL schemes, web sites can with registerProtocolHandler()
   */
  href?: string;
  /**
   * Hints at the human language of the linked URL. No built-in functionality.
   * The attribute contains a single “language tag” in the format defined in [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt).
   */
  hrefLang?: string;
  /**
   * This attribute specifies the media that the linked resource applies to. Its value must be a media type / media query.
   */
  media?: string;
  /**
   * A space-separated list of URLs.
   * When the link is followed, the browser will send POST requests with the body `PING` to the URLs.
   * Typically for tracking.
   */
  ping?: string;
  /**
   * How much of the referrer to send when following the link.
   */
  referrerPolicy?: ReferrerPolicy;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel?: string;
  /**
   * Where to display the linked URL, as the name for a *browsing context* (a tab, window, or `<iframe>`).
   * The following keywords have special meanings for where to load the URL:
   * - `_self`: the current browsing context. (Default)
   * - `_blank`: usually a new tab, but users can configure browsers to open a new window instead.
   * - `_parent`: the parent browsing context of the current one. If no parent, behaves as _self.
   * - `_top`: the topmost browsing context (the "highest" context that’s an ancestor of the current one). If no ancestors, behaves as _self.
   */
  target?: string;
  /**
   * Hints at the linked URL’s format with a MIME type. No built-in functionality.
   */
  type?: string;
}
