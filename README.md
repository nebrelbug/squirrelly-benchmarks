# templating-benchmarks

This project provides a framework for running benchmarks against multiple templating engines under Node.js.

# Table of Contents

- [templating-benchmarks](#templating-benchmarks)
- [Table of Contents](#table-of-contents)
- [Run Benchmarks](#run-benchmarks)
- [Current Results](#current-results)
  - [Performance](#performance)
  - [Compiled Size](#compiled-size)
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

- Node.js v10.19.0
- HP Notebook
- Processor: 2.7 GHz Intel Core i7
- Memory: 8 GB

## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
              ✓ squirrelly »   15,460 op/s (fastest)
                   ✗ marko »    1,790 op/s (88.42% slower)
                    ✗ dust »    1,324 op/s (91.44% slower)

                      if-expression
              ✓ squirrelly »  751,706 op/s (fastest)
                     ✗ pug »  667,132 op/s (11.25% slower)
                   ✗ marko »  349,034 op/s (53.57% slower)
                    ✗ jade »  107,176 op/s (85.74% slower)

                      projects-escaped
              ✓ squirrelly »  114,497 op/s (fastest)
              ✗ handlebars »   47,254 op/s (58.73% slower)
                    ✗ dust »   44,693 op/s (60.97% slower)
                   ✗ marko »   20,091 op/s (82.45% slower)
      ✗ marko (native-for) »   14,246 op/s (87.56% slower)

                      projects-unescaped
              ✓ squirrelly »  731,700 op/s (fastest)
      ✗ marko (native-for) »  290,188 op/s (60.34% slower)
                   ✗ marko »  270,002 op/s (63.10% slower)
                    ✗ dust »  131,955 op/s (81.97% slower)
              ✗ handlebars »   96,613 op/s (86.80% slower)

                      reverse-helper
              ✓ squirrelly »  796,248 op/s (fastest)
                    ✗ dust »  475,887 op/s (40.23% slower)
                   ✗ marko »  404,410 op/s (49.21% slower)

                      search-results
              ✓ squirrelly »  156,009 op/s (fastest)
                   ✗ marko »   16,062 op/s (89.70% slower)
                    ✗ dust »    9,618 op/s (93.83% slower)

                      simple-0
              ✓ squirrelly »  623,417 op/s (fastest)
                     ✗ es6 »  607,489 op/s (2.55% slower)
                     ✗ dot »  495,149 op/s (20.57% slower)
                   ✗ marko »  342,570 op/s (45.05% slower)
                    ✗ dust »  340,490 op/s (45.38% slower)
                  ✗ lodash »  217,892 op/s (65.05% slower)
              ✗ handlebars »  157,393 op/s (74.75% slower)

                      simple-1
              ✓ squirrelly »  793,242 op/s (fastest)
                     ✗ pug »  485,245 op/s (38.83% slower)
                     ✗ dot »  344,908 op/s (56.52% slower)
                    ✗ swig »  182,478 op/s (77.00% slower)
                   ✗ marko »  141,249 op/s (82.19% slower)
                    ✗ dust »  112,544 op/s (85.81% slower)
                    ✗ jade »  101,616 op/s (87.19% slower)
              ✗ handlebars »   94,475 op/s (88.09% slower)
                ✗ nunjucks »   35,180 op/s (95.57% slower)
                     ✗ vue »   30,360 op/s (96.17% slower)
                   ✗ react »    6,414 op/s (99.19% slower)

                      simple-2
              ✓ squirrelly »  805,600 op/s (fastest)
                   ✗ marko »  300,677 op/s (62.68% slower)
                    ✗ dust »  116,772 op/s (85.50% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
              ✓ squirrelly »   452 bytes gzipped    1102 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   488 bytes gzipped    1361 bytes uncompressed
                                    7.38% larger              19.03% larger
                   ✗ marko »   759 bytes gzipped    2256 bytes uncompressed
                                   40.45% larger              51.15% larger

                      if-expression
              ✓ squirrelly »   294 bytes gzipped     542 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   387 bytes gzipped    1049 bytes uncompressed
                                   24.03% larger              48.33% larger
                   ✗ marko »   457 bytes gzipped    1045 bytes uncompressed
                                   35.67% larger              48.13% larger
                     ✗ pug »   925 bytes gzipped    2198 bytes uncompressed
                                   68.22% larger              75.34% larger

                      projects-escaped
                    ✓ dust »   260 bytes gzipped     546 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   268 bytes gzipped     573 bytes uncompressed
                                    2.99% larger               4.71% larger
                   ✗ marko »   545 bytes gzipped    1610 bytes uncompressed
                                   52.29% larger              66.09% larger
      ✗ marko (native-for) »   560 bytes gzipped    1606 bytes uncompressed
                                   53.57% larger              66.00% larger
              ✗ handlebars »   722 bytes gzipped    2218 bytes uncompressed
                                   63.99% larger              75.38% larger

                      projects-unescaped
                    ✓ dust »   265 bytes gzipped     578 bytes uncompressed
                                      (smallest)              13.32% larger
              ✗ squirrelly »   269 bytes gzipped     501 bytes uncompressed
                                    1.49% larger                 (smallest)
                   ✗ marko »   528 bytes gzipped    1541 bytes uncompressed
                                   49.81% larger              67.49% larger
      ✗ marko (native-for) »   544 bytes gzipped    1537 bytes uncompressed
                                   51.29% larger              67.40% larger
              ✗ handlebars »   703 bytes gzipped    2250 bytes uncompressed
                                   62.30% larger              77.73% larger

                      reverse-helper
              ✓ squirrelly »   135 bytes gzipped     222 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   146 bytes gzipped     310 bytes uncompressed
                                    7.53% larger              28.39% larger
                   ✗ marko »   330 bytes gzipped     781 bytes uncompressed
                                   59.09% larger              71.57% larger

                      search-results
                    ✓ dust »   543 bytes gzipped    1500 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   582 bytes gzipped    1765 bytes uncompressed
                                    6.70% larger              15.01% larger
                   ✗ marko »   723 bytes gzipped    1904 bytes uncompressed
                                   24.90% larger              21.22% larger

                      simple-0
              ✓ squirrelly »   140 bytes gzipped     156 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   170 bytes gzipped     232 bytes uncompressed
                                   17.65% larger              32.76% larger
                     ✗ dot »   262 bytes gzipped     356 bytes uncompressed
                                   46.56% larger              56.18% larger
                   ✗ marko »   295 bytes gzipped     590 bytes uncompressed
                                   52.54% larger              73.56% larger
              ✗ handlebars »   428 bytes gzipped     919 bytes uncompressed
                                   67.29% larger              83.03% larger

                      simple-1
              ✓ squirrelly »   382 bytes gzipped     714 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   392 bytes gzipped     842 bytes uncompressed
                                    2.55% larger              15.20% larger
                    ✗ dust »   409 bytes gzipped     867 bytes uncompressed
                                    6.60% larger              17.65% larger
                     ✗ dot »   491 bytes gzipped     783 bytes uncompressed
                                   22.20% larger               8.81% larger
                    ✗ jade »   522 bytes gzipped    1116 bytes uncompressed
                                   26.82% larger              36.02% larger
                   ✗ marko »   589 bytes gzipped    1373 bytes uncompressed
                                   35.14% larger              48.00% larger
                ✗ nunjucks »   603 bytes gzipped    1361 bytes uncompressed
                                   36.65% larger              47.54% larger
              ✗ handlebars »   777 bytes gzipped    1999 bytes uncompressed
                                   50.84% larger              64.28% larger
                    ✗ swig »   779 bytes gzipped    3282 bytes uncompressed
                                   50.96% larger              78.24% larger
                     ✗ pug »  1064 bytes gzipped    2363 bytes uncompressed
                                   64.10% larger              69.78% larger

                      simple-2
                    ✓ dust »   266 bytes gzipped     634 bytes uncompressed
                                      (smallest)              11.51% larger
              ✗ squirrelly »   269 bytes gzipped     561 bytes uncompressed
                                    1.12% larger                 (smallest)
                   ✗ marko »   427 bytes gzipped    1057 bytes uncompressed
                                   37.70% larger              46.93% larger
```
<!-- </size> -->

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
