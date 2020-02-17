templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating engines under Node.js.

# Table of Contents

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

- Node.js v8.12.0
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
              ✓ squirrelly »    8,865 op/s (fastest)
                   ✗ marko »      937 op/s (89.43% slower)
                    ✗ dust »      725 op/s (91.82% slower)

                      if-expression
              ✓ squirrelly »  390,828 op/s (fastest)
                     ✗ pug »  360,955 op/s (7.64% slower)
                   ✗ marko »  182,351 op/s (53.34% slower)
                    ✗ jade »   56,982 op/s (85.42% slower)

                      projects-escaped
              ✓ squirrelly »   63,771 op/s (fastest)
              ✗ handlebars »   25,893 op/s (59.40% slower)
                    ✗ dust »   25,580 op/s (59.89% slower)
                   ✗ marko »   10,567 op/s (83.43% slower)
      ✗ marko (native-for) »    7,548 op/s (88.16% slower)

                      projects-unescaped
              ✓ squirrelly »  402,287 op/s (fastest)
      ✗ marko (native-for) »  155,516 op/s (61.34% slower)
                   ✗ marko »  141,174 op/s (64.91% slower)
                    ✗ dust »   72,966 op/s (81.86% slower)
              ✗ handlebars »   54,145 op/s (86.54% slower)

                      reverse-helper
              ✓ squirrelly »  414,223 op/s (fastest)
                    ✗ dust »  257,059 op/s (37.94% slower)
                   ✗ marko »  218,892 op/s (47.16% slower)

                      search-results
              ✓ squirrelly »   91,771 op/s (fastest)
                   ✗ marko »    8,697 op/s (90.52% slower)
                    ✗ dust »    8,570 op/s (90.66% slower)

                      simple-0
              ✓ squirrelly »  326,100 op/s (fastest)
                     ✗ es6 »  321,029 op/s (1.56% slower)
                     ✗ dot »  253,993 op/s (22.11% slower)
                   ✗ marko »  190,286 op/s (41.65% slower)
                  ✗ lodash »  188,564 op/s (42.18% slower)
                    ✗ dust »  181,208 op/s (44.43% slower)
              ✗ handlebars »   84,974 op/s (73.94% slower)

                      simple-1
              ✓ squirrelly »  415,430 op/s (fastest)
                     ✗ pug »  256,675 op/s (38.21% slower)
                     ✗ dot »  179,302 op/s (56.84% slower)
                    ✗ swig »   99,196 op/s (76.12% slower)
                    ✗ dust »   85,582 op/s (79.40% slower)
                   ✗ marko »   79,005 op/s (80.98% slower)
                    ✗ jade »   54,177 op/s (86.96% slower)
              ✗ handlebars »   53,483 op/s (87.13% slower)
                ✗ nunjucks »   33,222 op/s (92.00% slower)
                     ✗ vue »   15,995 op/s (96.15% slower)
                   ✗ react »    3,280 op/s (99.21% slower)

                      simple-2
              ✓ squirrelly »  398,944 op/s (fastest)
                   ✗ marko »  155,894 op/s (60.92% slower)
                    ✗ dust »   87,991 op/s (77.94% slower)
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
