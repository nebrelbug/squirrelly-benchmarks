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
              ✓ squirrelly »    6,205 op/s (fastest)
                   ✗ marko »    1,893 op/s (69.49% slower)
                    ✗ dust »      388 op/s (93.75% slower)

                      if-expression
                     ✓ pug »  192,016 op/s (fastest)
              ✗ squirrelly »  180,048 op/s (6.23% slower)
                   ✗ marko »  126,518 op/s (34.11% slower)
                    ✗ jade »   28,535 op/s (85.14% slower)

                      projects-escaped
      ✓ marko (native-for) »   49,028 op/s (fastest)
                   ✗ marko »   46,753 op/s (4.64% slower)
              ✗ handlebars »   23,859 op/s (51.34% slower)
                    ✗ dust »    6,749 op/s (86.23% slower)

                      projects-unescaped
              ✓ squirrelly »  304,121 op/s (fastest)
      ✗ marko (native-for) »  168,147 op/s (44.71% slower)
                   ✗ marko »  155,292 op/s (48.94% slower)
              ✗ handlebars »  123,137 op/s (59.51% slower)
                    ✗ dust »   45,727 op/s (84.96% slower)

                      reverse-helper
                   ✓ marko »  309,887 op/s (fastest)
              ✗ squirrelly »  289,390 op/s (6.61% slower)
                    ✗ dust »  184,593 op/s (40.43% slower)

                      search-results
              ✓ squirrelly »   80,197 op/s (fastest)
                   ✗ marko »   21,724 op/s (72.91% slower)
                    ✗ dust »    4,557 op/s (94.32% slower)

                      simple-0
                     ✓ es6 »  259,394 op/s (fastest)
              ✗ squirrelly »  200,897 op/s (22.55% slower)
                     ✗ dot »  147,398 op/s (43.18% slower)
              ✗ handlebars »  143,727 op/s (44.59% slower)
                  ✗ lodash »  128,444 op/s (50.48% slower)
                   ✗ marko »  124,821 op/s (51.88% slower)
                    ✗ dust »  103,721 op/s (60.01% slower)

                      simple-1
                     ✓ pug »  179,059 op/s (fastest)
                   ✗ marko »  128,573 op/s (28.20% slower)
                     ✗ dot »   96,925 op/s (45.87% slower)
              ✗ handlebars »   64,237 op/s (64.13% slower)
                    ✗ dust »   53,328 op/s (70.22% slower)
                    ✗ jade »   36,511 op/s (79.61% slower)
                    ✗ swig »   22,831 op/s (87.25% slower)
                ✗ nunjucks »   14,696 op/s (91.79% slower)
                     ✗ vue »    7,213 op/s (95.97% slower)
                   ✗ react »    2,222 op/s (98.76% slower)

                      simple-2
                   ✓ marko »  162,190 op/s (fastest)
                    ✗ dust »   81,527 op/s (49.73% slower)

                      simple-string
                     ✓ pug »  705,732 op/s (fastest)
                     ✗ dot »  619,161 op/s (12.27% slower)
              ✗ squirrelly »  537,582 op/s (23.83% slower)
              ✗ handlebars »  473,572 op/s (32.90% slower)

                      ui-components
                   ✓ marko »   53,848 op/s (fastest)
                   ✗ react »    1,266 op/s (97.65% slower)
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
              ✗ squirrelly »   585 bytes gzipped    2046 bytes uncompressed
                                   16.58% larger              33.43% larger
                   ✗ marko »   775 bytes gzipped    2307 bytes uncompressed
                                   37.03% larger              40.96% larger

                      if-expression
              ✓ squirrelly »   367 bytes gzipped     725 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   387 bytes gzipped    1049 bytes uncompressed
                                    5.17% larger              30.89% larger
                   ✗ marko »   462 bytes gzipped    1104 bytes uncompressed
                                   20.56% larger              34.33% larger
                     ✗ pug »   905 bytes gzipped    2138 bytes uncompressed
                                   59.45% larger              66.09% larger

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
              ✗ squirrelly »   352 bytes gzipped     751 bytes uncompressed
                                   24.43% larger              22.90% larger
                   ✗ marko »   545 bytes gzipped    1568 bytes uncompressed
                                   51.19% larger              63.07% larger
              ✗ handlebars »   546 bytes gzipped    1616 bytes uncompressed
                                   51.28% larger              64.17% larger
      ✗ marko (native-for) »   567 bytes gzipped    1596 bytes uncompressed
                                   53.09% larger              63.72% larger

                      reverse-helper
              ✓ squirrelly »   132 bytes gzipped     272 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   147 bytes gzipped     311 bytes uncompressed
                                   10.20% larger              12.54% larger
                   ✗ marko »   361 bytes gzipped     950 bytes uncompressed
                                   63.43% larger              71.37% larger

                      search-results
                    ✓ dust »   544 bytes gzipped    1501 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   664 bytes gzipped    2027 bytes uncompressed
                                   18.07% larger              25.95% larger
                   ✗ marko »   711 bytes gzipped    1931 bytes uncompressed
                                   23.49% larger              22.27% larger

                      simple-0
              ✓ squirrelly »   142 bytes gzipped     173 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   172 bytes gzipped     233 bytes uncompressed
                                   17.44% larger              25.75% larger
                     ✗ dot »   262 bytes gzipped     356 bytes uncompressed
                                   45.80% larger              51.40% larger
              ✗ handlebars »   321 bytes gzipped     633 bytes uncompressed
                                   55.76% larger              72.67% larger
                   ✗ marko »   325 bytes gzipped     759 bytes uncompressed
                                   56.31% larger              77.21% larger

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
              ✗ squirrelly »   121 bytes gzipped     172 bytes uncompressed
                                    5.79% larger              40.70% larger
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
