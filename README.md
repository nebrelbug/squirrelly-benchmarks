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
              ✓ squirrelly »   12,273 op/s (fastest)
                   ✗ marko »    4,339 op/s (64.65% slower)
                    ✗ dust »      788 op/s (93.58% slower)

                      if-expression
              ✓ squirrelly »  423,482 op/s (fastest)
                     ✗ pug »  418,322 op/s (1.22% slower)
                   ✗ marko »  332,599 op/s (21.46% slower)
                    ✗ jade »   75,541 op/s (82.16% slower)

                      projects-escaped
      ✓ marko (native-for) »   81,149 op/s (fastest)
                   ✗ marko »   78,673 op/s (3.05% slower)
              ✗ handlebars »   62,434 op/s (23.06% slower)
              ✗ squirrelly »   52,038 op/s (35.87% slower)
                    ✗ dust »   21,336 op/s (73.71% slower)

                      projects-unescaped
              ✓ squirrelly »  501,044 op/s (fastest)
      ✗ marko (native-for) »  272,707 op/s (45.57% slower)
                   ✗ marko »  253,924 op/s (49.32% slower)
              ✗ handlebars »  229,307 op/s (54.23% slower)
                    ✗ dust »  120,068 op/s (76.04% slower)

                      reverse-helper
              ✓ squirrelly »  509,140 op/s (fastest)
                    ✗ dust »  347,894 op/s (31.67% slower)
                   ✗ marko »  334,833 op/s (34.24% slower)

                      search-results
              ✓ squirrelly »  126,336 op/s (fastest)
                   ✗ marko »   42,877 op/s (66.06% slower)
                    ✗ dust »   14,441 op/s (88.57% slower)

                      simple-0
              ✓ squirrelly »  443,246 op/s (fastest)
                     ✗ es6 »  437,511 op/s (1.29% slower)
                     ✗ dot »  375,984 op/s (15.17% slower)
              ✗ handlebars »  315,668 op/s (28.78% slower)
                   ✗ marko »  300,154 op/s (32.28% slower)
                  ✗ lodash »  287,838 op/s (35.06% slower)
                    ✗ dust »  263,115 op/s (40.64% slower)

                      simple-1
              ✓ squirrelly »  416,233 op/s (fastest)
                     ✗ pug »  292,143 op/s (29.81% slower)
                     ✗ dot »  264,591 op/s (36.43% slower)
                   ✗ marko »  223,050 op/s (46.41% slower)
              ✗ handlebars »  150,831 op/s (63.76% slower)
                    ✗ dust »  124,142 op/s (70.17% slower)
                    ✗ jade »   80,932 op/s (80.56% slower)
                    ✗ swig »   53,192 op/s (87.22% slower)
                ✗ nunjucks »   44,154 op/s (89.39% slower)
                     ✗ vue »   15,476 op/s (96.28% slower)
                   ✗ react »    2,835 op/s (99.32% slower)

                      simple-2
              ✓ squirrelly »  491,093 op/s (fastest)
                   ✗ marko »  273,454 op/s (44.32% slower)
                    ✗ dust »  147,631 op/s (69.94% slower)

                      simple-string
              ✓ squirrelly »  695,818 op/s (fastest)
                     ✗ pug »  663,370 op/s (4.66% slower)
                     ✗ dot »  624,087 op/s (10.31% slower)
              ✗ handlebars »  527,910 op/s (24.13% slower)

                      ui-components
                   ✓ marko »  101,809 op/s (fastest)
                   ✗ react »    3,528 op/s (96.53% slower)
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
              ✗ squirrelly »   577 bytes gzipped    1934 bytes uncompressed
                                   15.42% larger              29.58% larger
                   ✗ marko »   775 bytes gzipped    2307 bytes uncompressed
                                   37.03% larger              40.96% larger

                      if-expression
              ✓ squirrelly »   314 bytes gzipped     628 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   387 bytes gzipped    1049 bytes uncompressed
                                   18.86% larger              40.13% larger
                   ✗ marko »   462 bytes gzipped    1104 bytes uncompressed
                                   32.03% larger              43.12% larger
                     ✗ pug »   905 bytes gzipped    2138 bytes uncompressed
                                   65.30% larger              70.63% larger

                      projects-escaped
                    ✓ dust »   261 bytes gzipped     547 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   292 bytes gzipped     585 bytes uncompressed
                                   10.62% larger               6.50% larger
                   ✗ marko »   554 bytes gzipped    1621 bytes uncompressed
                                   52.89% larger              66.26% larger
              ✗ handlebars »   567 bytes gzipped    1584 bytes uncompressed
                                   53.97% larger              65.47% larger
      ✗ marko (native-for) »   578 bytes gzipped    1649 bytes uncompressed
                                   54.84% larger              66.83% larger

                      projects-unescaped
                    ✓ dust »   266 bytes gzipped     579 bytes uncompressed
                                      (smallest)               5.01% larger
              ✗ squirrelly »   282 bytes gzipped     550 bytes uncompressed
                                    5.67% larger                 (smallest)
                   ✗ marko »   545 bytes gzipped    1568 bytes uncompressed
                                   51.19% larger              64.92% larger
              ✗ handlebars »   546 bytes gzipped    1616 bytes uncompressed
                                   51.28% larger              65.97% larger
      ✗ marko (native-for) »   567 bytes gzipped    1596 bytes uncompressed
                                   53.09% larger              65.54% larger

                      reverse-helper
              ✓ squirrelly »   121 bytes gzipped     211 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   147 bytes gzipped     311 bytes uncompressed
                                   17.69% larger              32.15% larger
                   ✗ marko »   361 bytes gzipped     950 bytes uncompressed
                                   66.48% larger              77.79% larger

                      search-results
                    ✓ dust »   544 bytes gzipped    1501 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   635 bytes gzipped    1935 bytes uncompressed
                                   14.33% larger              22.43% larger
                   ✗ marko »   711 bytes gzipped    1931 bytes uncompressed
                                   23.49% larger              22.27% larger

                      simple-0
              ✓ squirrelly »   129 bytes gzipped     134 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   172 bytes gzipped     233 bytes uncompressed
                                   25.00% larger              42.49% larger
                     ✗ dot »   262 bytes gzipped     356 bytes uncompressed
                                   50.76% larger              62.36% larger
              ✗ handlebars »   321 bytes gzipped     633 bytes uncompressed
                                   59.81% larger              78.83% larger
                   ✗ marko »   325 bytes gzipped     759 bytes uncompressed
                                   60.31% larger              82.35% larger

                      simple-1
                   ✓ react »   392 bytes gzipped     842 bytes uncompressed
                                      (smallest)              10.33% larger
              ✗ squirrelly »   398 bytes gzipped     755 bytes uncompressed
                                    1.51% larger                 (smallest)
                    ✗ dust »   412 bytes gzipped     868 bytes uncompressed
                                    4.85% larger              13.02% larger
                     ✗ dot »   491 bytes gzipped     783 bytes uncompressed
                                   20.16% larger               3.58% larger
                    ✗ jade »   522 bytes gzipped    1116 bytes uncompressed
                                   24.90% larger              32.35% larger
                   ✗ marko »   597 bytes gzipped    1370 bytes uncompressed
                                   34.34% larger              44.89% larger
                ✗ nunjucks »   608 bytes gzipped    1401 bytes uncompressed
                                   35.53% larger              46.11% larger
              ✗ handlebars »   624 bytes gzipped    1513 bytes uncompressed
                                   37.18% larger              50.10% larger
                    ✗ swig »   782 bytes gzipped    3334 bytes uncompressed
                                   49.87% larger              77.35% larger
                     ✗ pug »  1046 bytes gzipped    2303 bytes uncompressed
                                   62.52% larger              67.22% larger

                      simple-2
                    ✓ dust »   267 bytes gzipped     635 bytes uncompressed
                                      (smallest)               9.13% larger
              ✗ squirrelly »   273 bytes gzipped     577 bytes uncompressed
                                    2.20% larger                 (smallest)
                   ✗ marko »   437 bytes gzipped    1153 bytes uncompressed
                                   38.90% larger              49.96% larger

                      simple-string
                     ✓ dot »   114 bytes gzipped     102 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   116 bytes gzipped     104 bytes uncompressed
                                    1.72% larger               1.92% larger
                     ✗ pug »   124 bytes gzipped     116 bytes uncompressed
                                    8.06% larger              12.07% larger
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
