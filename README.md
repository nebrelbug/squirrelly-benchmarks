templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating engines under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[pug](https://github.com/pugjs/pug) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/marko-js/marko) | HTML/Concise HTML | ✔ | ✔ | ✔
[nunjucks](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✔ | ✖
[react](https://facebook.github.io/react/)<sup>1</sup> | JSX | ✖ | ✖ | ✔
[swig](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✖ | ✔

NOTE 1: While React is not a "templating engine", it is commonly used to render HTML on the server so it has been included in this benchmark.

# Table of Contents

- [Run Benchmarks](#run-benchmarks)
- [Current Results](#current-results)
	- [Performance](#performance)
	- [Compiled Size](#compiled-size)
- [Client-side Runtime Sizes](#client-side-runtime-sizes)
	- [Marko](#marko)
	- [Dust](#dust)
- [Contribute](#contribute)
	- [Adding a New Comparison Group](#adding-a-new-comparison-group)
	- [Adding a New Template Engine](#adding-a-new-template-engine)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Run Benchmarks

1. Clone this repository
2. `npm install`
3. `npm test` (or `make`)

# Current Results

The following results were collected with the following setup:

- Node.js v7.4.0
- MacBook Pro (Retina, 15-inch, Mid 2014)
- Processor: 2.8 GHz Intel Core i7
- Memory: 16 GB 1600 MHz DDR3

## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
                   ✓ marko »    2,343 op/s (fastest)
                    ✗ dust »      474 op/s (79.77% slower)

                      if-expression
                     ✓ pug »  319,196 op/s (fastest)
                   ✗ marko »  241,824 op/s (24.24% slower)
                    ✗ jade »   46,085 op/s (85.56% slower)

                      projects-escaped
      ✓ marko (native-for) »   54,772 op/s (fastest)
                   ✗ marko »   53,287 op/s (2.71% slower)
              ✗ handlebars »   41,038 op/s (25.07% slower)
                    ✗ dust »   12,950 op/s (76.36% slower)

                      projects-unescaped
      ✓ marko (native-for) »  184,117 op/s (fastest)
                   ✗ marko »  169,192 op/s (8.11% slower)
              ✗ handlebars »  147,942 op/s (19.65% slower)
                    ✗ dust »   55,572 op/s (69.82% slower)

                      reverse-helper
              ✓ squirrelly »  397,986 op/s (fastest)
                   ✗ marko »  246,226 op/s (38.13% slower)
                    ✗ dust »  239,066 op/s (39.93% slower)

                      search-results
                   ✓ marko »   26,208 op/s (fastest)
                    ✗ dust »    9,356 op/s (64.30% slower)

                      simple-0
                     ✓ es6 »  324,117 op/s (fastest)
              ✗ squirrelly »  322,629 op/s (0.46% slower)
                     ✗ dot »  237,971 op/s (26.58% slower)
              ✗ handlebars »  215,251 op/s (33.59% slower)
                   ✗ marko »  212,538 op/s (34.43% slower)
                  ✗ lodash »  172,144 op/s (46.89% slower)
                    ✗ dust »  137,457 op/s (57.59% slower)

                      simple-1
                     ✓ pug »  250,709 op/s (fastest)
                     ✗ dot »  177,882 op/s (29.05% slower)
                   ✗ marko »  167,619 op/s (33.14% slower)
              ✗ handlebars »   98,982 op/s (60.52% slower)
                    ✗ dust »   85,677 op/s (65.83% slower)
                    ✗ jade »   52,284 op/s (79.15% slower)
                    ✗ swig »   32,182 op/s (87.16% slower)
                ✗ nunjucks »   28,677 op/s (88.56% slower)
                     ✗ vue »   10,271 op/s (95.90% slower)
                   ✗ react »    2,188 op/s (99.13% slower)

                      simple-2
                   ✓ marko »  189,678 op/s (fastest)
                    ✗ dust »   94,035 op/s (50.42% slower)

                      simple-string
              ✓ squirrelly »  547,392 op/s (fastest)
                     ✗ pug »  541,216 op/s (1.13% slower)
                     ✗ dot »  535,019 op/s (2.26% slower)
              ✗ handlebars »  472,738 op/s (13.64% slower)

                      ui-components
                   ✓ marko »   70,317 op/s (fastest)
                   ✗ react »    2,001 op/s (97.15% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                    ✓ dust »   488 bytes gzipped    1362 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   775 bytes gzipped    2307 bytes uncompressed
                                   37.03% larger              40.96% larger

                      if-expression
                    ✓ jade »   387 bytes gzipped    1049 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   462 bytes gzipped    1104 bytes uncompressed
                                   16.23% larger               4.98% larger
                     ✗ pug »   905 bytes gzipped    2138 bytes uncompressed
                                   57.24% larger              50.94% larger

                      projects-escaped
                    ✓ dust »   261 bytes gzipped     547 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   554 bytes gzipped    1621 bytes uncompressed
                                   52.89% larger              66.26% larger
              ✗ handlebars »   567 bytes gzipped    1584 bytes uncompressed
                                   53.97% larger              65.47% larger
      ✗ marko (native-for) »   578 bytes gzipped    1649 bytes uncompressed
                                   54.84% larger              66.83% larger

                      projects-unescaped
                    ✓ dust »   266 bytes gzipped     579 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   545 bytes gzipped    1568 bytes uncompressed
                                   51.19% larger              63.07% larger
              ✗ handlebars »   546 bytes gzipped    1616 bytes uncompressed
                                   51.28% larger              64.17% larger
      ✗ marko (native-for) »   567 bytes gzipped    1596 bytes uncompressed
                                   53.09% larger              63.72% larger

                      reverse-helper
                    ✓ dust »   147 bytes gzipped     311 bytes uncompressed
                                      (smallest)               3.86% larger
              ✗ squirrelly »   150 bytes gzipped     299 bytes uncompressed
                                    2.00% larger                 (smallest)
                   ✗ marko »   361 bytes gzipped     950 bytes uncompressed
                                   59.28% larger              68.53% larger

                      search-results
                    ✓ dust »   544 bytes gzipped    1501 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   711 bytes gzipped    1931 bytes uncompressed
                                   23.49% larger              22.27% larger

                      simple-0
              ✓ squirrelly »   158 bytes gzipped     200 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   172 bytes gzipped     233 bytes uncompressed
                                    8.14% larger              14.16% larger
                     ✗ dot »   262 bytes gzipped     356 bytes uncompressed
                                   39.69% larger              43.82% larger
              ✗ handlebars »   321 bytes gzipped     633 bytes uncompressed
                                   50.78% larger              68.40% larger
                   ✗ marko »   325 bytes gzipped     759 bytes uncompressed
                                   51.38% larger              73.65% larger

                      simple-1
                   ✓ react »   392 bytes gzipped     842 bytes uncompressed
                                      (smallest)               7.01% larger
                    ✗ dust »   412 bytes gzipped     868 bytes uncompressed
                                    4.85% larger               9.79% larger
                     ✗ dot »   491 bytes gzipped     783 bytes uncompressed
                                   20.16% larger                 (smallest)
                    ✗ jade »   522 bytes gzipped    1116 bytes uncompressed
                                   24.90% larger              29.84% larger
                   ✗ marko »   597 bytes gzipped    1370 bytes uncompressed
                                   34.34% larger              42.85% larger
                ✗ nunjucks »   608 bytes gzipped    1401 bytes uncompressed
                                   35.53% larger              44.11% larger
              ✗ handlebars »   624 bytes gzipped    1513 bytes uncompressed
                                   37.18% larger              48.25% larger
                    ✗ swig »   782 bytes gzipped    3334 bytes uncompressed
                                   49.87% larger              76.51% larger
                     ✗ pug »  1046 bytes gzipped    2303 bytes uncompressed
                                   62.52% larger              66.00% larger

                      simple-2
                    ✓ dust »   267 bytes gzipped     635 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   437 bytes gzipped    1153 bytes uncompressed
                                   38.90% larger              44.93% larger

                      simple-string
                     ✓ dot »   114 bytes gzipped     102 bytes uncompressed
                                      (smallest)                 (smallest)
                     ✗ pug »   124 bytes gzipped     116 bytes uncompressed
                                    8.06% larger              12.07% larger
              ✗ squirrelly »   139 bytes gzipped     200 bytes uncompressed
                                   17.99% larger              49.00% larger
              ✗ handlebars »   196 bytes gzipped     246 bytes uncompressed
                                   41.84% larger              58.54% larger

                      ui-components
                   ✓ react »   204 bytes gzipped     310 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ marko »   386 bytes gzipped     990 bytes uncompressed
                                   47.15% larger              68.69% larger
```
<!-- </size> -->

# Client-side Runtime Sizes

Below are the approximate runtime sizes for each engine (lower numbers are better):

## Marko

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `marko` | ~1.2KB gzipped (2.7KB uncompressed) |
| `marko` +<br>`async-writer` + <br>`raptor-xml/util` | ~2.33KB gzipped (6.3KB uncompressed) |

_NOTE:_ Sizes are approximate because overhead associated with the CommonJS module loader varies. Size based on code as of April 7, 2014.

## Dust

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `dust-core` | 3.41KB gzipped (10.07KB uncompressed) |
| `dust-core` +<br>`dust-helpers` | 4.7KB gzipped (14.2KB uncompressed) |

_NOTE:_ Size based on code as of April 7, 2014.

# Contribute

## Adding a New Comparison Group

Each comparison group should contain a data file (either `data.json` or `data.js`) and a set of templates to compare. The file extension of the template will be used to determine which engine should be used. If the data file has the `.js` extension then it should be a JavaScript module that exports the data. A sample directory structure is shown below:

```
templates
    ├── group1
    │   ├── data.js
    │   ├── template.dust
    │   └── template.marko
    ├── group2
    │   ├── data.json
    │   ├── template.dust
    │   └── template.marko
    ├── group3
    │   ├── data.json
    │   ├── template.dust
    │   ├── template.native-for.marko
    │   └── template.marko
    └── group4
        ├── data.json
        ├── template.dust
        └── template.marko
```

## Adding a New Template Engine

To register a new templating engine, simply create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.

Pull Requests welcome!
