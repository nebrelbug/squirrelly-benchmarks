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
              ✓ squirrelly »    9,756 op/s (fastest)
                   ✗ marko »    2,335 op/s (76.07% slower)
                    ✗ dust »      745 op/s (92.36% slower)

                      if-expression
              ✓ squirrelly »  332,462 op/s (fastest)
                     ✗ pug »  318,860 op/s (4.09% slower)
                   ✗ marko »  245,827 op/s (26.06% slower)
                    ✗ jade »   48,208 op/s (85.50% slower)

                      projects-escaped
              ✓ squirrelly »   86,346 op/s (fastest)
      ✗ marko (native-for) »   59,129 op/s (31.52% slower)
                   ✗ marko »   55,498 op/s (35.73% slower)
              ✗ handlebars »   46,723 op/s (45.89% slower)
                    ✗ dust »   10,864 op/s (87.42% slower)

                      projects-unescaped
              ✓ squirrelly »  512,468 op/s (fastest)
      ✗ marko (native-for) »  284,769 op/s (44.43% slower)
                   ✗ marko »  266,443 op/s (48.01% slower)
              ✗ handlebars »  247,155 op/s (51.77% slower)
                    ✗ dust »  130,209 op/s (74.59% slower)

                      reverse-helper
              ✓ squirrelly »  527,494 op/s (fastest)
                   ✗ marko »  355,871 op/s (32.54% slower)
                    ✗ dust »  285,075 op/s (45.96% slower)

                      search-results
              ✓ squirrelly »  110,577 op/s (fastest)
                   ✗ marko »   29,041 op/s (73.74% slower)
                    ✗ dust »   16,052 op/s (85.48% slower)

                      simple-0
              ✓ squirrelly »  475,562 op/s (fastest)
                     ✗ es6 »  473,864 op/s (0.36% slower)
                     ✗ dot »  367,335 op/s (22.76% slower)
                   ✗ marko »  333,608 op/s (29.85% slower)
                  ✗ lodash »  298,328 op/s (37.27% slower)
                    ✗ dust »  273,767 op/s (42.43% slower)
              ✗ handlebars »  259,811 op/s (45.37% slower)

                      simple-1
              ✓ squirrelly »  493,250 op/s (fastest)
                     ✗ dot »  259,210 op/s (47.45% slower)
                     ✗ pug »  256,262 op/s (48.05% slower)
                   ✗ marko »  211,251 op/s (57.17% slower)
              ✗ handlebars »  170,954 op/s (65.34% slower)
                    ✗ dust »  151,947 op/s (69.19% slower)
                    ✗ jade »   74,229 op/s (84.95% slower)
                    ✗ swig »   44,401 op/s (91.00% slower)
                ✗ nunjucks »   39,043 op/s (92.08% slower)
                     ✗ vue »   15,733 op/s (96.81% slower)
                   ✗ react »    3,317 op/s (99.33% slower)

                      simple-2
              ✓ squirrelly »  538,444 op/s (fastest)
                   ✗ marko »  267,496 op/s (50.32% slower)
                    ✗ dust »  170,896 op/s (68.26% slower)
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
                                      (smallest)               0.29% larger
              ✗ squirrelly »   529 bytes gzipped    1358 bytes uncompressed
                                    7.75% larger                 (smallest)
                   ✗ marko »   777 bytes gzipped    2315 bytes uncompressed
                                   37.19% larger              41.34% larger

                      if-expression
              ✓ squirrelly »   314 bytes gzipped     628 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ jade »   387 bytes gzipped    1049 bytes uncompressed
                                   18.86% larger              40.13% larger
                   ✗ marko »   464 bytes gzipped    1106 bytes uncompressed
                                   32.33% larger              43.22% larger
                     ✗ pug »   905 bytes gzipped    2138 bytes uncompressed
                                   65.30% larger              70.63% larger

                      projects-escaped
                    ✓ dust »   261 bytes gzipped     547 bytes uncompressed
                                      (smallest)                 (smallest)
              ✗ squirrelly »   292 bytes gzipped     585 bytes uncompressed
                                   10.62% larger               6.50% larger
                   ✗ marko »   555 bytes gzipped    1621 bytes uncompressed
                                   52.97% larger              66.26% larger
              ✗ handlebars »   567 bytes gzipped    1584 bytes uncompressed
                                   53.97% larger              65.47% larger
      ✗ marko (native-for) »   579 bytes gzipped    1649 bytes uncompressed
                                   54.92% larger              66.83% larger

                      projects-unescaped
                    ✓ dust »   266 bytes gzipped     579 bytes uncompressed
                                      (smallest)               5.01% larger
              ✗ squirrelly »   282 bytes gzipped     550 bytes uncompressed
                                    5.67% larger                 (smallest)
              ✗ handlebars »   546 bytes gzipped    1616 bytes uncompressed
                                   51.28% larger              65.97% larger
                   ✗ marko »   546 bytes gzipped    1568 bytes uncompressed
                                   51.28% larger              64.92% larger
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
                   ✗ marko »   719 bytes gzipped    1936 bytes uncompressed
                                   24.34% larger              22.47% larger

                      simple-0
              ✓ squirrelly »   129 bytes gzipped     134 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   172 bytes gzipped     233 bytes uncompressed
                                   25.00% larger              42.49% larger
                     ✗ dot »   262 bytes gzipped     356 bytes uncompressed
                                   50.76% larger              62.36% larger
              ✗ handlebars »   321 bytes gzipped     633 bytes uncompressed
                                   59.81% larger              78.83% larger
                   ✗ marko »   326 bytes gzipped     759 bytes uncompressed
                                   60.43% larger              82.35% larger

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
                   ✗ marko »   608 bytes gzipped    1383 bytes uncompressed
                                   35.53% larger              45.41% larger
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
                   ✗ marko »   442 bytes gzipped    1155 bytes uncompressed
                                   39.59% larger              50.04% larger
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
