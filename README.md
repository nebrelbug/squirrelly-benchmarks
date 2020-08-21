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

**Note: running tests will fail on Node.js 14. Consider using nvm to run Node 10.x for this project**

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
              ✓ squirrelly »   13,618 op/s (fastest)
                   ✗ marko »    2,057 op/s (84.89% slower)
                    ✗ dust »    1,348 op/s (90.10% slower)

                      if-expression
              ✓ squirrelly »  670,839 op/s (fastest)
                     ✗ pug »  658,479 op/s (1.84% slower)
                   ✗ marko »  493,583 op/s (26.42% slower)
                    ✗ jade »  108,141 op/s (83.88% slower)

                      projects-escaped
              ✓ squirrelly »   57,798 op/s (fastest)
                    ✗ dust »   48,409 op/s (16.24% slower)
              ✗ handlebars »   47,515 op/s (17.79% slower)
      ✗ marko (native-for) »   19,408 op/s (66.42% slower)
                   ✗ marko »   17,880 op/s (69.06% slower)

                      projects-unescaped
              ✓ squirrelly »  727,194 op/s (fastest)
      ✗ marko (native-for) »  321,965 op/s (55.73% slower)
                   ✗ marko »  304,506 op/s (58.13% slower)
                    ✗ dust »  138,665 op/s (80.93% slower)
              ✗ handlebars »   62,700 op/s (91.38% slower)

                      reverse-helper
              ✓ squirrelly »  733,669 op/s (fastest)
                   ✗ marko »  589,350 op/s (19.67% slower)
                    ✗ dust »  273,635 op/s (62.70% slower)

                      search-results
              ✓ squirrelly »  140,900 op/s (fastest)
                   ✗ marko »   13,213 op/s (90.62% slower)
                    ✗ dust »    8,668 op/s (93.85% slower)

                      simple-0
                   ✓ marko »  480,464 op/s (fastest)
                     ✗ dot »  464,215 op/s (3.38% slower)
                  ✗ lodash »  344,203 op/s (28.36% slower)
              ✗ squirrelly »  341,780 op/s (28.86% slower)
                     ✗ es6 »  340,533 op/s (29.12% slower)
                    ✗ dust »  323,391 op/s (32.69% slower)
              ✗ handlebars »  158,867 op/s (66.93% slower)

                      simple-1
              ✓ squirrelly »  730,313 op/s (fastest)
                     ✗ dot »  309,042 op/s (57.68% slower)
                     ✗ pug »  283,415 op/s (61.19% slower)
                   ✗ marko »  158,406 op/s (78.31% slower)
                    ✗ swig »  103,374 op/s (85.85% slower)
                    ✗ dust »   92,404 op/s (87.35% slower)
                    ✗ jade »   91,011 op/s (87.54% slower)
              ✗ handlebars »   89,778 op/s (87.71% slower)
                ✗ nunjucks »   38,519 op/s (94.73% slower)
                     ✗ vue »   29,763 op/s (95.92% slower)
                   ✗ react »    4,827 op/s (99.34% slower)

                      simple-2
              ✓ squirrelly »  690,743 op/s (fastest)
                   ✗ marko »  454,831 op/s (34.15% slower)
                    ✗ dust »  116,160 op/s (83.18% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
              ✓ squirrelly »   452 bytes gzipped    1103 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   488 bytes gzipped    1361 bytes uncompressed
                                    7.38% larger              18.96% larger
                   ✗ marko »   774 bytes gzipped    2291 bytes uncompressed
                                   41.60% larger              51.86% larger

                      if-expression
              ✓ squirrelly »   296 bytes gzipped     543 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   387 bytes gzipped    1049 bytes uncompressed
                                   23.51% larger              48.24% larger
                   ✗ marko »   457 bytes gzipped    1045 bytes uncompressed
                                   35.23% larger              48.04% larger
                     ✗ pug »   917 bytes gzipped    2194 bytes uncompressed
                                   67.72% larger              75.25% larger

                      projects-escaped
                    ✓ dust »   260 bytes gzipped     546 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   270 bytes gzipped     574 bytes uncompressed
                                    3.70% larger               4.88% larger
                   ✗ marko »   552 bytes gzipped    1636 bytes uncompressed
                                   52.90% larger              66.63% larger
      ✗ marko (native-for) »   565 bytes gzipped    1632 bytes uncompressed
                                   53.98% larger              66.54% larger
              ✗ handlebars »   717 bytes gzipped    2212 bytes uncompressed
                                   63.74% larger              75.32% larger

                      projects-unescaped
                    ✓ dust »   265 bytes gzipped     578 bytes uncompressed
                                      (smallest)              13.15% larger
              ✗ squirrelly »   270 bytes gzipped     502 bytes uncompressed
                                    1.85% larger                 (smallest)
                   ✗ marko »   533 bytes gzipped    1564 bytes uncompressed
                                   50.28% larger              67.90% larger
      ✗ marko (native-for) »   547 bytes gzipped    1560 bytes uncompressed
                                   51.55% larger              67.82% larger
              ✗ handlebars »   720 bytes gzipped    2244 bytes uncompressed
                                   63.19% larger              77.63% larger

                      reverse-helper
              ✓ squirrelly »   136 bytes gzipped     223 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   146 bytes gzipped     310 bytes uncompressed
                                    6.85% larger              28.06% larger
                   ✗ marko »   330 bytes gzipped     781 bytes uncompressed
                                   58.79% larger              71.45% larger

                      search-results
                    ✓ dust »   543 bytes gzipped    1500 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   581 bytes gzipped    1766 bytes uncompressed
                                    6.54% larger              15.06% larger
                   ✗ marko »   733 bytes gzipped    1877 bytes uncompressed
                                   25.92% larger              20.09% larger

                      simple-0
              ✓ squirrelly »   141 bytes gzipped     157 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   170 bytes gzipped     232 bytes uncompressed
                                   17.06% larger              32.33% larger
                     ✗ dot »   262 bytes gzipped     356 bytes uncompressed
                                   46.18% larger              55.90% larger
                   ✗ marko »   295 bytes gzipped     590 bytes uncompressed
                                   52.20% larger              73.39% larger
              ✗ handlebars »   428 bytes gzipped     919 bytes uncompressed
                                   67.06% larger              82.92% larger

                      simple-1
              ✓ squirrelly »   384 bytes gzipped     715 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   392 bytes gzipped     842 bytes uncompressed
                                    2.04% larger              15.08% larger
                    ✗ dust »   409 bytes gzipped     867 bytes uncompressed
                                    6.11% larger              17.53% larger
                     ✗ dot »   491 bytes gzipped     783 bytes uncompressed
                                   21.79% larger               8.68% larger
                    ✗ jade »   522 bytes gzipped    1116 bytes uncompressed
                                   26.44% larger              35.93% larger
                   ✗ marko »   587 bytes gzipped    1369 bytes uncompressed
                                   34.58% larger              47.77% larger
                ✗ nunjucks »   603 bytes gzipped    1361 bytes uncompressed
                                   36.32% larger              47.47% larger
                    ✗ swig »   765 bytes gzipped    3255 bytes uncompressed
                                   49.80% larger              78.03% larger
              ✗ handlebars »   777 bytes gzipped    1999 bytes uncompressed
                                   50.58% larger              64.23% larger
                     ✗ pug »  1061 bytes gzipped    2359 bytes uncompressed
                                   63.81% larger              69.69% larger

                      simple-2
                    ✓ dust »   266 bytes gzipped     634 bytes uncompressed
                                      (smallest)              11.36% larger
              ✗ squirrelly »   269 bytes gzipped     562 bytes uncompressed
                                    1.12% larger                 (smallest)
                   ✗ marko »   419 bytes gzipped    1041 bytes uncompressed
                                   36.52% larger              46.01% larger
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
