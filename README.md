templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

* [raptor-templates](https://github.com/raptorjs3/raptor-templates)
* [dustjs-linked](https://github.com/linkedin/dustjs)
* [jade](https://github.com/visionmedia/jade)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Run Benchmarks](#run-benchmarks)
- [Adding a New Comparison Group](#adding-a-new-comparison-group)
- [Adding a New Template Engine](#adding-a-new-template-engine)
- [Current Results](#current-results)
	- [Performance](#performance)
	- [Compiled Size](#compiled-size)
- [Contribute](#contribute)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Run Benchmarks

1. Clone this repository
2. `npm install`
3. `npm test` (or `make`)

# Adding a New Comparison Group

Each comparison group should contain a data file (either `data.json` or `data.js`) and a set of templates to compare. The file extension of the template will be used to determine which engine should be used. If the data file has the `.js` extension then it should be a JavaScript module that exports the data. A sample directory structure is shown below:

```
templates
    ├── group1
    │   ├── data.js
    │   ├── template.dust
    │   └── template.rhtml
    ├── group2
    │   ├── data.json
    │   ├── template.dust
    │   └── template.rhtml
    ├── group3
    │   ├── data.json
    │   ├── template.dust
    │   ├── template.native-for.rhtml
    │   └── template.rhtml
    └── group4
        ├── data.json
        ├── template.dust
        └── template.rhtml
```

# Adding a New Template Engine

To register a new templating engine, simple create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.


# Current Results


## Performance

```
                      template: friends
             699 op/s » dust
           1,876 op/s » raptor

                      template: if-expression
          43,184 op/s » dust
         172,679 op/s » raptor

                      template: search-results
           9,207 op/s » dust
          23,793 op/s » raptor (native-for)
          22,006 op/s » raptor

                      template: simple-1
          96,575 op/s » dust
          60,587 op/s » jade
         113,307 op/s » raptor

                      template: simple-2
         111,627 op/s » dust
         187,372 op/s » raptor
```

## Compiled Size

```json
{
    "friends": {
        "gzipped": {
            "dust": 498,
            "raptor": 446
        },
        "uncompressed": {
            "dust": 1512,
            "raptor": 931
        }
    },
    "if-expression": {
        "gzipped": {
            "dust": 372,
            "raptor": 256
        },
        "uncompressed": {
            "dust": 987,
            "raptor": 435
        }
    },
    "search-results": {
        "gzipped": {
            "dust": 556,
            "raptor (native-for)": 560,
            "raptor": 505
        },
        "uncompressed": {
            "dust": 1575,
            "raptor (native-for)": 1751,
            "raptor": 1175
        }
    },
    "simple-1": {
        "gzipped": {
            "dust": 255,
            "jade": 325,
            "raptor": 183
        },
        "uncompressed": {
            "dust": 493,
            "jade": 612,
            "raptor": 252
        }
    },
    "simple-2": {
        "gzipped": {
            "dust": 275,
            "raptor": 221
        },
        "uncompressed": {
            "dust": 718,
            "raptor": 473
        }
    }
}
```

# Contribute

Pull Requests welcome!