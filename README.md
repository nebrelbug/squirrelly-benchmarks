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
                   ✓ marko »    2,440 op/s (fastest)
                    ✗ dust »      363 op/s (85.12% slower)

                      if-expression
                     ✓ pug »  304,797 op/s (fastest)
                   ✗ marko »  229,864 op/s (24.58% slower)
                    ✗ jade »   43,247 op/s (85.81% slower)

                      projects-escaped
      ✓ marko (native-for) »   53,466 op/s (fastest)
                   ✗ marko »   51,331 op/s (3.99% slower)
              ✗ handlebars »   40,665 op/s (23.94% slower)
                    ✗ dust »   12,180 op/s (77.22% slower)

                      projects-unescaped
      ✓ marko (native-for) »  171,242 op/s (fastest)
                   ✗ marko »  160,400 op/s (6.33% slower)
              ✗ handlebars »  138,739 op/s (18.98% slower)
                    ✗ dust »   58,955 op/s (65.57% slower)

                      reverse-helper
              ✓ squirrelly »  351,541 op/s (fastest)
                   ✗ marko »  228,069 op/s (35.12% slower)
                    ✗ dust »  222,307 op/s (36.76% slower)

                      search-results
                   ✓ marko »   21,203 op/s (fastest)
                    ✗ dust »    8,592 op/s (59.48% slower)

                      simple-0
              ✓ squirrelly »  222,402 op/s (fastest)
                     ✗ es6 »  211,794 op/s (4.77% slower)
                     ✗ dot »  197,826 op/s (11.05% slower)
                   ✗ marko »  139,553 op/s (37.25% slower)
                    ✗ dust »  132,919 op/s (40.23% slower)
              ✗ handlebars »  116,642 op/s (47.55% slower)
                  ✗ lodash »  110,245 op/s (50.43% slower)

                      simple-1
                     ✓ pug »  195,343 op/s (fastest)
                   ✗ marko »  134,774 op/s (31.01% slower)
                     ✗ dot »  110,971 op/s (43.19% slower)
              ✗ handlebars »   66,551 op/s (65.93% slower)
                    ✗ dust »   53,829 op/s (72.44% slower)
                    ✗ jade »   36,662 op/s (81.23% slower)
                ✗ nunjucks »   23,609 op/s (87.91% slower)
                    ✗ swig »   23,421 op/s (88.01% slower)
                     ✗ vue »    5,608 op/s (97.13% slower)
                   ✗ react »    1,560 op/s (99.20% slower)

                      simple-2
                   ✓ marko »  125,238 op/s (fastest)
                    ✗ dust »   64,407 op/s (48.57% slower)

                      simple-string
                     ✓ pug »  489,678 op/s (fastest)
              ✗ squirrelly »  461,902 op/s (5.67% slower)
                     ✗ dot »  458,659 op/s (6.33% slower)
              ✗ handlebars »  411,405 op/s (15.98% slower)

                      ui-components
                   ✓ marko »   53,502 op/s (fastest)
                   ✗ react »    1,385 op/s (97.41% slower)
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
