# Versions

Version updates will be documented with bullet points on this page.

---

#### 0.1.0

* Names updated with greedy or non-greedy depending on how they parse.
* Broken out HTTP call and check functions to its own class.
* Updated README.
* Updated Tests with new functions.

**Updated names:**
| Previous name               | New Name                                     |
| ----------------------------|:--------------------------------------------:|
| parseDataForElement         | nonGreedyFindSingleLineElementsInnerText     |
| parseElementsInnerText      | greedyFindMultiLineElementsByAttributeOrText |


#### 0.0.3

* Has implemented parsing of element data with regexp.
* Updated README with examples.
* Test app updated with more examples.

#### 0.0.2

* Implemented fetching of single line elements.
* Added check for isHttps to choose correct HTML get function.
* Test app file added to test functions (function-test-app/test.js)

#### 0.0.1

This version has no functionality **Do not use**