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
              ✓ squirrelly »   14,744 op/s (fastest)
                   ✗ marko »    2,884 op/s (80.44% slower)
                    ✗ dust »    1,181 op/s (91.99% slower)

                      if-expression
              ✓ squirrelly »  709,853 op/s (fastest)
                     ✗ pug »  678,205 op/s (4.46% slower)
                   ✗ marko »  473,332 op/s (33.32% slower)
                    ✗ jade »  104,658 op/s (85.26% slower)

                      projects-escaped
              ✓ squirrelly »   81,410 op/s (fastest)
                    ✗ dust »   48,515 op/s (40.41% slower)
              ✗ handlebars »   34,581 op/s (57.52% slower)
      ✗ marko (native-for) »   26,817 op/s (67.06% slower)
                   ✗ marko »   22,597 op/s (72.24% slower)

                      projects-unescaped
              ✓ squirrelly »  709,455 op/s (fastest)
      ✗ marko (native-for) »  286,252 op/s (59.65% slower)
                   ✗ marko »  267,693 op/s (62.27% slower)
                    ✗ dust »  123,871 op/s (82.54% slower)
              ✗ handlebars »   86,378 op/s (87.82% slower)

                      reverse-helper
              ✓ squirrelly »  727,126 op/s (fastest)
                   ✗ marko »  635,958 op/s (12.54% slower)
                    ✗ dust »  462,961 op/s (36.33% slower)

                      search-results
              ✓ squirrelly »  131,446 op/s (fastest)
                   ✗ marko »   23,127 op/s (82.41% slower)
                    ✗ dust »   16,620 op/s (87.36% slower)

                      simple-0
              ✓ squirrelly »  598,444 op/s (fastest)
                     ✗ es6 »  573,611 op/s (4.15% slower)
                     ✗ dot »  487,802 op/s (18.49% slower)
                   ✗ marko »  446,177 op/s (25.44% slower)
                  ✗ lodash »  329,820 op/s (44.89% slower)
                    ✗ dust »  294,566 op/s (50.78% slower)
              ✗ handlebars »  155,717 op/s (73.98% slower)

                      simple-1
              ✓ squirrelly »  685,915 op/s (fastest)
                     ✗ pug »  451,690 op/s (34.15% slower)
                     ✗ dot »  342,055 op/s (50.13% slower)
                    ✗ swig »  177,391 op/s (74.14% slower)
                   ✗ marko »  166,729 op/s (75.69% slower)
                    ✗ dust »  132,984 op/s (80.61% slower)
                    ✗ jade »  101,031 op/s (85.27% slower)
              ✗ handlebars »   90,509 op/s (86.80% slower)
                ✗ nunjucks »   61,370 op/s (91.05% slower)
                     ✗ vue »   32,549 op/s (95.25% slower)
                   ✗ react »    5,847 op/s (99.15% slower)

                      simple-2
              ✓ squirrelly »  771,654 op/s (fastest)
                   ✗ marko »  466,159 op/s (39.59% slower)
                    ✗ dust »  181,763 op/s (76.45% slower)
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
