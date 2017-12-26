import qs from 'qs';

class ModernURL {
  /**
   * Initializes a new storage provider that will sync the search state in the URL
   * using web API (window.location.pushState and onpopstate event).
   * @param {object} $0 the options.
   * @param {function(object):string} [$0.titleFromUIState] function that transforms a UI state
   * into a title for the page. It takes one parameter: a syncable object (generated by the mapping
   * provided to the URL sync). It should return a string that will be the title.
   * @param {number} [$0.writeTimeout = 400] time before a write is actually done.
   * Prevent having too much entries in the history and thus make the back button more friendly.
   */
  constructor({ titleFromUIState, writeTimeout = 400 } = {}) {
    this.titleFromUIState = titleFromUIState;
    this.writeTimer = undefined;
    this.writeTimeout = writeTimeout;
  }

  /**
   * This method pushes a search state into the URL.
   * @param {object} uiState a syncable UI state
   * @return {undefined}
   */
  write(uiState) {
    const url = this.createURL(uiState);
    const title = this.titleFromUIState && this.titleFromUIState(uiState);

    if (this.writeTimer) {
      window.clearTimeout(this.writeTimer);
    }

    this.writeTimer = setTimeout(() => {
      if (title) window.document.title = title;
      window.history.pushState(uiState, title || '', url);
      this.writeTimer = undefined;
    }, this.writeTimeout);
  }

  /**
   * This methods read the URL and returns a syncable UI search state.
   * @return {object} the equivalent to what is store in the URL as an object
   */
  read() {
    return qs.parse(window.location.search.slice(1));
  }

  /**
   * This methods sets a callback on the `onpopstate` event of the history API
   * of the current page. This way, the URL sync can keep track of the changes.
   * @param {function(object)} cb the callback that will receive the latest uiState.
   * It is called when the URL is updated.
   * @returns {undefined}
   */
  onUpdate(cb) {
    this._onPopState = event => {
      if (this.writeTimer) {
        window.clearTimeout(this.writeTimer);
        this.writeTimer = undefined;
      }
      const uiState = event.state;
      // at initial load, the state is read from the URL without
      // update. Therefore the state object is not there. In this
      // case we fallback and read the URL.
      if (!uiState) {
        cb(this.read());
      } else {
        cb(uiState);
      }
    };
    window.addEventListener('popstate', this._onPopState);
  }

  /**
   * This method creates a complete URL from a given syncable UI state.
   *
   * It always generates the full url, not a relative one.
   * This way we can handle cases like using a <base href>, see
   * https://github.com/algolia/instantsearch.js/issues/790 for the original issue
   *
   * @param {object} uiState a syncable UI state
   * @returns {string} the full URL for the provided syncable state
   */
  createURL(uiState) {
    const { protocol, hostname, port = '', pathname, hash } = window.location;
    const queryString = qs.stringify(uiState);
    const portWithPrefix = port === '' ? '' : `:${port}`;
    // IE <= 11 has no location.origin or buggy. Therefore we don't rely on it
    if (!uiState || Object.keys(uiState).length === 0)
      return `${protocol}//${hostname}${portWithPrefix}${pathname}${hash}`;
    else
      return `${protocol}//${hostname}${portWithPrefix}${pathname}?${queryString}${hash}`;
  }

  /**
   * This method removes the event listener and cleans up the URL.
   * @returns {undefined}
   */
  dispose() {
    window.removeEventListener('popstate', this._onPopState);
    if (this.writeTimer) window.clearTimeout(this.writeTimer);
    this.write();
  }
}

export default function(...args) {
  return new ModernURL(...args);
}
