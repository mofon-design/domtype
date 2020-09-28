type Booleanish = 'true' | 'false' | boolean;

/**
 * Global attributes are attributes common to all HTML elements;
 * they can be used on all elements, though they may have no effect on some elements.
 */
export interface GlobalHTMLAttributes {
  // Living Standard Attributes
  /**
   * Provides a hint for generating a keyboard shortcut for the current element.
   * This attribute consists of a space-separated list of characters.
   * The browser should use the first one that exists on the computer keyboard layout.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute|HTML Living Standard}
   */
  accessKey?: string;
  /**
   * Controls whether and how text input is automatically capitalized as it is entered/edited by the user.
   * It can have the following values:
   * - `off` or `none`, no autocapitalization is applied (all letters default to lowercase)
   * - `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase
   * - `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase
   * - `characters`, all letters should default to uppercase
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#autocapitalization|HTML Living Standard}
   */
  autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  /**
   * A space-separated list of the classes of the element.
   * Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/elements.html#classes|HTML Living Standard}
   */
  class?: string;
  /**
   * An enumerated attribute indicating if the element should be editable by the user.
   * If so, the browser modifies its widget to allow editing.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/editing.html#attr-contenteditable|HTML Living Standard}
   */
  contentEditable?: Booleanish | 'inherit';
  /**
   * An enumerated attribute indicating the directionality of the element's text.
   * It can have the following values:
   * - `ltr`, which means left to right and is to be used for languages that are written from the left to the right (like English);
   * - `rtl`, which means right to left and is to be used for languages that are written from the right to the left (like Arabic);
   * - `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute|HTML Living Standard}
   */
  dir?: 'ltr' | 'rtl' | 'auto';
  /**
   * An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](https://developer.mozilla.org/en-us/docs/DragDrop/Drag_and_Drop).
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#the-draggable-attribute|HTML Living Standard}
   */
  draggable?: Booleanish;
  /**
   * A Boolean attribute indicates that the element is not yet, or is no longer, relevant.
   * For example, it can be used to hide elements of the page that can't be used until the login process has been completed.
   * The browser won't render such elements.
   * This attribute must not be used to hide content that could legitimately be shown.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute|HTML Living Standard}
   */
  hidden?: boolean;
  /**
   * Defines a unique identifier (ID) which must be unique in the whole document.
   * Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute|HTML Living Standard}
   */
  id?: string;
  /**
   * Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents.
   * Used primarily on `<input>` elements, but is usable on any element while in `contentEditable` mode.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute|HTML Living Standard}
   */
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  /**
   * Allows you to specify that a standard HTML element should behave like a registered custom built-in element.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is|HTML Living Standard}
   */
  is?: string;
  /**
   * The unique, global identifier of an item.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#attr-itemid|HTML Living Standard}
   */
  itemID?: string;
  /**
   * Used to add properties to an item.
   * Every HTML element may have an `itemProp` attribute specified, where an `itemProp` consists of a name and value pair.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute|HTML Living Standard}
   */
  itemProp?: string;
  /**
   * Properties that are not descendants of an element with the `itemScope` attribute can be associated with the item using an `itemRef`.
   * It provides a list of element ids (not `itemID`s) with additional properties elsewhere in the document.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#attr-itemref|HTML Living Standard}
   */
  itemRef?: string;
  /**
   * `itemScope` (usually) works along with `itemType` to specify that the HTML contained in a block is about a particular item.
   * `itemScope` creates the Item and defines the scope of the `itemType` associated with it.
   * `itemType` is a valid URL of a vocabulary (such as [schema.org](schema.org)) that describes the item and its properties context.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope|HTML Living Standard}
   */
  itemScope?: boolean;
  /**
   * Specifies the URL of the vocabulary that will be used to define `itemProp`s (item properties) in the data structure.
   * `itemScope` is used to set the scope of where in the data structure the vocabulary set by `itemType` will be active.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/microdata.html#attr-itemtype|HTML Living Standard}
   */
  itemType?: string;
  /**
   * Helps define the language of an element:
   * the language that non-editable elements are in, or the language that editable elements should be written in by the user.
   *
   * @description
   * The attribute contains one "language tag" (made of hyphen-separated "language subtags") in the format defined in
   * [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt).
   * [`xml:lang`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-xml:lang) has priority over it.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes|HTML Living Standard}
   */
  lang?: string;
  /**
   * Assigns a slot in a shadow DOM shadow tree to an element:
   * An element with a `slot` attribute is assigned to the slot created by the `<slot>` element whose `name` attribute's value matches that slot attribute's value.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#attr-slot|HTML Living Standard}
   */
  slot?: string;
  /**
   * An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:
   * - `true`, which indicates that the element should be, if possible, checked for spelling errors;
   * - `false`, which indicates that the element should not be checked for spelling errors.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#spelling-and-grammar-checking|HTML Living Standard}
   */
  spellCheck?: Booleanish;
  /**
   * Contains CSS styling declarations to be applied to the element.
   * Note that it is recommended for styles to be defined in a separate file or files.
   * This attribute and the `<style>` element have mainly the purpose of allowing for quick styling, for example for testing purposes.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#the-style-attribute|HTML Living Standard}
   */
  style?: string;
  /**
   * An integer attribute indicating if the element can take input focus (is *focusable*), if it should participate to sequential keyboard navigation, and if so, at what position.
   * It can take several values:
   * - a *negative value* means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
   * - `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
   * - a *positive value* means that the element should be focusable and reachable via sequential keyboard navigation;
   *   the order in which the elements are focused is the increasing value of the tabindex.
   *   If several elements share the same tabindex, their relative order follows their relative positions in the document.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#attr-tabindex|HTML Living Standard}
   */
  tabIndex?: number;
  /**
   * Contains a text representing advisory information related to the element it belongs to.
   * Such information can typically, but not necessarily, be presented to the user as a tooltip.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute|HTML Living Standard}
   */
  title?: string;
  /**
   * An enumerated attribute that is used to specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.
   * It can have the following values:
   * - `yes`, which indicates that the element will be translated.
   * - `no`, which indicates that the element will not be translated.
   *
   * @see {@link https://html.spec.whatwg.org/multipage/dom.html#attr-translate|HTML Living Standard}
   */
  translate?: 'yes' | 'no';

  // Working Draft Attributes
  /**
   * A space-separated list of the part names of the element.
   * Part names allows CSS to select and style specific elements in a shadow tree via the `::part` pseudo-element.
   *
   * @see {@link https://drafts.csswg.org/css-shadow-parts-1/#part-attr|Working Draft}
   */
  part?: string;

  // Deprecated Attributes
  /**
   * The `id` of a `<menu>` to use as the contextual menu for this element.
   *
   * @deprecated {@link https://www.w3.org/TR/html51/interactive-elements.html#context-menus|HTML 5.1}
   */
  contextMenu?: string;
  /**
   * An enumerated attribute indicating what types of content can be dropped on an element,
   * using the [Drag and Drop API](https://developer.mozilla.org/en-us/docs/DragDrop/Drag_and_Drop).
   *
   * @deprecated {@link https://www.w3.org/TR/html51/editing.html#the-dropzone-attribute|HTML 5.1}
   */
  dropZone?: string;

  // RDFa Attributes
  about?: string;
  datatype?: string;
  inlist?: any;
  prefix?: string;
  property?: string;
  resource?: string;
  typeof?: string;
  vocab?: string;

  // Non-standard Attributes
  autoCorrect?: string;
  autoSave?: string;
  color?: string;
  results?: number;
  security?: string;
  unselectable?: 'on' | 'off';
}
