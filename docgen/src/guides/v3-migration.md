This document helps you migrate from InstantSearch 2 to InstantSearch 3.

InstantSearch 3 introduces some breaking changes in the widget's naming, options and markup.

## Widgets

### Breadcrumb

#### CSS classes

| Before                          | After                           |
| ------------------------------- | ------------------------------- |
| `ais-breadcrumb`                | `ais-Breadcrumb`                |
|                                 | `ais-Breadcrumb--noRefinement`  |
| `ais-breadcrumb`                | `ais-Breadcrumb-list`           |
| `ais-breadcrumb--separator`     | `ais-Breadcrumb-separator`      |
| `ais-breadcrumb--label`         | `ais-Breadcrumb-link`           |
| `ais-breadcrumb--disabledLabel` |                                 |
|                                 | `ais-Breadcrumb-item`           |
|                                 | `ais-Breadcrumb-item--selected` |

#### Markup

```html
<div class="ais-Breadcrumb">
  <ul class="ais-Breadcrumb-list">
    <li class="ais-Breadcrumb-item">
      <a class="ais-Breadcrumb-link" href="#">Home</a>
    </li>
    <li class="ais-Breadcrumb-item">
      <span class="ais-Breadcrumb-separator" aria-hidden="true">></span>
      <a class="ais-Breadcrumb-link" href="#">Cooking</a>
    </li>
    <li class="ais-Breadcrumb-item ais-Breadcrumb-item--selected">
      <span class="ais-Breadcrumb-separator" aria-hidden="true">></span>
      Kitchen textiles
    </li>
  </ul>
</div>
```

### Hits

#### Options

| Before          | After           |
| --------------- | --------------- |
| `escapeHits`    | `escapeHTML`    |
| `showMoreLabel` | `loadMoreLabel` |

- `escapeHTML` becomes `true` by default.
- `allItems` template has been removed in favor of `connectHits`

#### CSS classes

| Before            | After             |
| ----------------- | ----------------- |
| `ais-hits`        | `ais-Hits`        |
| `ais-hits--empty` | `ais-Hits--empty` |
|                   | `ais-Hits--list`  |
| `ais-hits--item`  | `ais-Hits--item`  |

#### Markup

```html
<div class="ais-Hits">
  <ol class="ais-Hits-list">
    <li class="ais-Hits-item">
      Hit 5477500: Amazon - Fire TV Stick with Alexa Voice Remote - Black
    </li>
    <li class="ais-Hits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
    <li class="ais-Hits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
    <li class="ais-Hits-item">
      Hit 5477500: Amazon - Fire TV Stick with Alexa Voice Remote - Black
    </li>
    <li class="ais-Hits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
    <li class="ais-Hits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
    <li class="ais-Hits-item">
      Hit 5477500: Amazon - Fire TV Stick with Alexa Voice Remote - Black
    </li>
    <li class="ais-Hits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
  </ol>
</div>
```

### InfiniteHits

#### Options

| Before       | After        |
| ------------ | ------------ |
| `escapeHits` | `escapeHTML` |

`escapeHTML` becomes `true` by default.

#### CSS classes

| Before                              | After                                 |
| ----------------------------------- | ------------------------------------- |
| `ais-infinite-hits`                 | `ais-InfiniteHits`                    |
| `ais-infinite-hits--empty`          | `ais-InfiniteHits--empty`             |
|                                     | `ais-InfiniteHits--list`              |
| `ais-infinite-hits--item`           | `ais-InfiniteHits--item`              |
| `ais-infinite-hits--showmore`       |                                       |
| `ais-infinite-hits--showmoreButton` | `ais-InfiniteHits-loadMore`           |
|                                     | `ais-InfiniteHits-loadMore--disabled` |

#### Markup

```html
<div class="ais-InfiniteHits">
  <ol class="ais-InfiniteHits-list">
    <li class="ais-InfiniteHits-item">
      Hit 5477500: Amazon - Fire TV Stick with Alexa Voice Remote - Black
    </li>
    <li class="ais-InfiniteHits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
    <li class="ais-InfiniteHits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
    <li class="ais-InfiniteHits-item">
      Hit 5477500: Amazon - Fire TV Stick with Alexa Voice Remote - Black
    </li>
    <li class="ais-InfiniteHits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
    <li class="ais-InfiniteHits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
    <li class="ais-InfiniteHits-item">
      Hit 5477500: Amazon - Fire TV Stick with Alexa Voice Remote - Black
    </li>
    <li class="ais-InfiniteHits-item">
      Hit 4397400: Google - Chromecast - Black
    </li>
  </ol>

  <button class="ais-InfiniteHits-loadMore">Show more results</button>
```

### SortBy

#### Options

| Before    | After   |
| --------- | ------- |
| `indices` | `items` |

#### CSS classes

| Before                 | After               |
| ---------------------- | ------------------- |
|                        | `ais-SortBy`        |
| `ais-sort-by-selector` | `ais-SortBy-select` |
| `ais-sort-by--item`    | `ais-SortBy-option` |

#### Markup

```html
<div class="ais-SortBy">
 <select class="ais-SortBy-select">
   <option class="ais-SortBy-option" value="Most relevant">Most relevant</option>
   <option class="ais-SortBy-option" value="Lowest price">Lowest price</option>
 </select>
</div>
```

### Stats

#### CSS classes

| Before            | After            |
| ----------------- | ---------------- |
| `ais-stats`       | `ais-Stats`      |
| `ais-stats--body` |                  |
| `ais-stats--time` |                  |
|                   | `ais-Stats-text` |

#### Markup

```html
<div class="ais-Stats">
  <span class="ais-Stats-text">20,337 results found in 1ms.</span>
</div>
```

### RangeInput

#### Options

| Before          | After       |
| --------------- | ----------- |
| `attributeName` | `attribute` |

#### CSS classes

| Before                       | After                          |
| ---------------------------- | ------------------------------ |
| `ais-range-input`            | `ais-RangeInput`               |
|                              | `ais-RangeInput--noRefinement` |
| `ais-range-input--body`      |                                |
| `ais-range-input--form`      | `ais-RangeInput-form`          |
| `ais-range-input--fieldset`  |                                |
|                              | `ais-RangeInput-label`         |
| `ais-range-input--labelMin`  |                                |
| `ais-range-input--labelMax`  |                                |
|                              | `ais-RangeInput-input`         |
| `ais-range-input--inputMin`  | `ais-RangeInput-input--min`    |
| `ais-range-input--inputMax`  | `ais-RangeInput-input--max`    |
| `ais-range-input--separator` | `ais-RangeInput-separator`     |
| `ais-range-input--submit`    | `ais-RangeInput-button`        |

#### Markup

```html
<div class="ais-RangeInput">
  <form class="ais-RangeInput-form">
    <label class="ais-RangeInput-label">
      <input class="ais-RangeInput-input ais-RangeInput-input--min" type="number" />
    </label>

    <span class="ais-RangeInput-separator">to</span>

    <label class="ais-RangeInput-label">
      <input class="ais-RangeInput-input ais-RangeInput-input--max" type="number" />
    </label>

    <button class="ais-RangeInput-submit" type="submit">Go</button>
  </form>
</div>
```

### clearRefinements -- previously clearAll

#### Options

| Before              | After                |
| ------------------- | -------------------- |
| `excludeAttributes` | `excludedAttributes` |

#### CSS classes

| Before                | After                                   |
| --------------------- | --------------------------------------- |
| `ais-clear-all`       | `ais-ClearRefinements`                  |
| `ais-clear-all--body` |                                         |
| `ais-clear-all--link` |                                         |
|                       | `ais-ClearRefinements-button`           |
|                       | `ais-ClearRefinements-button--disabled` |

#### Markup

```html
<div class="ais-ClearRefinements">
  <button class="ais-ClearRefinements-button">
    Clear refinements
  </button>
</div>
```

### MenuSelect

#### Options

| Before          | After       |
| --------------- | ----------- |
| `attributeName` | `attribute` |

#### CSS classes

| Before                    | After                          |
| ------------------------- | ------------------------------ |
| `ais-menu-select`         | `ais-MenuSelect`               |
|                           | `ais-MenuSelect--noRefinement` |
| `ais-menu-select--select` | `ais-MenuSelect-select`        |
| `ais-menu-select--option` | `ais-MenuSelect-option`        |
| `ais-menu-select--header` |                                |
| `ais-menu-select--footer` |                                |

#### Markup

```html
<div class="ais-MenuSelect">
  <select class="ais-MenuSelect-select">
    <option class="ais-MenuSelect-option" value="Appliances">Appliances (4306)</option>
    <option class="ais-MenuSelect-option" value="Audio">Audio (1570)</option>
  </select>
</div>
```

### Pagination

### Options

| Before          | After                  |
| --------------- | ---------------------- |
| `maxPages`      | `totalPages`           |
| `showFirstLast` | `showFirst` `showLast` |
|                 | `showNext`             |
|                 | `showPrevious`         |

### CSS classes

| Before                           | After                               |
| -------------------------------- | ----------------------------------- |
|                                  | `ais-Pagination`                    |
|                                  | `ais-Pagination--noRefinement`      |
| `ais-pagination`                 | `ais-Pagination-list`               |
| `ais-pagination--item`           | `ais-Pagination-item`               |
| `ais-pagination--item__first`    | `ais-Pagination-item--firstPage`    |
| `ais-pagination--item__last`     | `ais-Pagination-item--lastPage`     |
| `ais-pagination--item__previous` | `ais-Pagination-item--previousPage` |
| `ais-pagination--item__next`     | `ais-Pagination-item--nextPage`     |
|                                  | `ais-Pagination-item--page`         |
| `ais-pagination--item__active`   | `ais-Pagination-item--selected`     |
| `ais-pagination--item__disabled` | `ais-Pagination-item--disabled`     |
| `ais-pagination--link`           | `ais-Pagination-link`               |

### Markup

```html
<div class="ais-Pagination">
  <ul class="ais-Pagination-list">
    <li class="ais-Pagination-item ais-Pagination-item--firstPage ais-Pagination-item--disabled">
      <span class="ais-Pagination-link" aria-label="Previous">‹‹</span>
    </li>
    <li class="ais-Pagination-item ais-Pagination-item--previousPage ais-Pagination-item--disabled">
      <span class="ais-Pagination-link" aria-label="Previous">‹</span>
    </li>
    <li class="ais-Pagination-item ais-Pagination-item--selected">
      <a class="ais-Pagination-link" href="#">1</a>
    </li>
    <li class="ais-Pagination-item ais-Pagination-item--page">
      <a class="ais-Pagination-link" href="#">2</a>
    </li>
    <li class="ais-Pagination-item ais-Pagination-item--page">
      <a class="ais-Pagination-link" href="#">3</a>
    </li>
    <li class="ais-Pagination-item">
      <a class="ais-Pagination-link" href="#">4</a>
    </li>
    <li class="ais-Pagination-item ais-Pagination-item--nextPage">
      <a class="ais-Pagination-link" aria-label="Next" href="#">›</a>
    </li>
    <li class="ais-Pagination-item ais-Pagination-item--lastPage">
      <a class="ais-Pagination-link" aria-label="Next" href="#">››</a>
    </li>
  </ul>
</div>
```

### PriceRanges

Widget removed.

## Connectors

### connectRange

#### Options

| Before          | After       |
| --------------- | ----------- |
| `attributeName` | `attribute` |

### connectClearRefinements -- previously connectClearAll

#### Options

| Before              | After                |
| ------------------- | -------------------- |
| `excludeAttributes` | `excludedAttributes` |