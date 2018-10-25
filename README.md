templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating engines under Node.js.

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
              ✓ squirrelly »   13,761 op/s (fastest)
                   ✗ marko »    3,496 op/s (74.59% slower)
                    ✗ dust »    1,142 op/s (91.70% slower)

                      if-expression
                     ✓ pug »  504,740 op/s (fastest)
              ✗ squirrelly »  495,894 op/s (1.75% slower)
                   ✗ marko »  365,350 op/s (27.62% slower)
                    ✗ jade »   76,090 op/s (84.92% slower)

                      projects-escaped
              ✓ squirrelly »  106,011 op/s (fastest)
                   ✗ marko »   86,958 op/s (17.97% slower)
      ✗ marko (native-for) »   86,893 op/s (18.03% slower)
              ✗ handlebars »   70,191 op/s (33.79% slower)
                    ✗ dust »   17,654 op/s (83.35% slower)

                      projects-unescaped
              ✓ squirrelly »  559,110 op/s (fastest)
      ✗ marko (native-for) »  297,802 op/s (46.74% slower)
                   ✗ marko »  280,441 op/s (49.84% slower)
              ✗ handlebars »  254,057 op/s (54.56% slower)
                    ✗ dust »  140,005 op/s (74.96% slower)

                      reverse-helper
              ✓ squirrelly »  529,570 op/s (fastest)
                    ✗ dust »  378,558 op/s (28.52% slower)
                   ✗ marko »  358,707 op/s (32.26% slower)

                      search-results
              ✓ squirrelly »  133,058 op/s (fastest)
                   ✗ marko »   35,798 op/s (73.10% slower)
                    ✗ dust »   17,528 op/s (86.83% slower)

                      simple-0
              ✓ squirrelly »  508,187 op/s (fastest)
                     ✗ es6 »  493,627 op/s (2.87% slower)
                     ✗ dot »  396,637 op/s (21.95% slower)
                   ✗ marko »  330,315 op/s (35.00% slower)
                    ✗ dust »  294,145 op/s (42.12% slower)
                  ✗ lodash »  292,718 op/s (42.40% slower)
              ✗ handlebars »  265,915 op/s (47.67% slower)

                      simple-1
              ✓ squirrelly »  418,679 op/s (fastest)
                     ✗ pug »  346,237 op/s (17.30% slower)
                     ✗ dot »  292,098 op/s (30.23% slower)
                   ✗ marko »  211,082 op/s (49.58% slower)
              ✗ handlebars »  175,058 op/s (58.19% slower)
                    ✗ dust »  148,009 op/s (64.65% slower)
                    ✗ jade »   78,165 op/s (81.33% slower)
                    ✗ swig »   51,176 op/s (87.78% slower)
                ✗ nunjucks »   45,477 op/s (89.14% slower)
                     ✗ vue »   16,191 op/s (96.13% slower)
                   ✗ react »    3,210 op/s (99.23% slower)

                      simple-2
              ✓ squirrelly »  560,669 op/s (fastest)
                   ✗ marko »  272,055 op/s (51.48% slower)
                    ✗ dust »  167,306 op/s (70.16% slower)

                      simple-string
              ✓ squirrelly »  723,152 op/s (fastest)
                     ✗ pug »  656,641 op/s (9.20% slower)
                     ✗ dot »  644,051 op/s (10.94% slower)
              ✗ handlebars »  566,308 op/s (21.69% slower)

                      ui-components
                   ✓ marko »  121,527 op/s (fastest)
                   ✗ react »    2,744 op/s (97.74% slower)
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
                   ✗ marko »   387 bytes gzipped     990 bytes uncompressed
                                   47.29% larger              68.69% larger
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
