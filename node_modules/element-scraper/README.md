# Element-scraper
Scrapes elements from a URL
Written in pure JavaScript, and without any extra dependencies.

> **Be aware**: names of methods are probable to change until version 0.1.0

**release notes can be found [here](https://github.com/BunnyCode/element-scraper/blob/main/releasenotes.md)**

### How to install

This module is intended to be used as a helper to fetch elements on a webpage.
It does not handle logins at its current stage.

> npm i element-scraper


### How to use

```js
import {getHtmlData, parseDataForElement, parseElementsInnerText} from 'element-scraper'
```

Alternate methods

```js
import {hasCorrectHtmlProtocol, isHttps, parseDataForMultiLineElements} from 'element-scraper'
```


#### All available GET methods

* getHtmlData,
* isHttps,
* hasCorrectHtmlProtocol

#### All available Parsing methods
* greedyFindSingleLineElements
* greedyFindMultiLineElementsByAttributeOrText
* nonGreedyFindMultiLineElementsByAttributeOrText *
* greedyFindMultiLineElementsByType
* nonGreedyFindMultiLineElementsByType
* nonGreedyFindSingleLineElementsInnerText

> All parsing methods follow the schema of (dataToParse, "What you are looking for")
except for **nonGreedySingleLineElementsInnerText(dataToParse, boolean: getEmptySpaces)**
See example further down this page.

---

### Getting Data

#### getHtmlData

```js
await getHtmlData(url)
```

**This function is asynchronous**
To GET the entire HTML page you want to parse, as a string.

---

#### hasCorrectHtmlProtocol

```js
hasCorrectHtmlProtocol(url)
```

Checks if the URL seems to have to correct protocol, as in http or https.
It will however not check that it is a completely valid URL


#### isHttps

```js
isHttps(url)
```

You can check if the URL supplied is HTTPS, this will return true or false.


### Parsing elements

Once you have the data string, you can check start parsing out the elements you would like to get.


#### parseDataForElement

```js
greedyFindSingleLineElements(dataToParse, elementMatch)
```

You pass your data string as __dataToParse__. To find a specific class name or element ID pass this as __elementMatch__.


#### parseElementsInnerText

```js
nonGreedyFindSingleLineElementsInnerText(dataToParse, getEmptySpaces)
```

Gets all text within >< but not empty spaces (see note) and defaults to **getEmptySpaces** as false / omitted.

> Note: the empty array data from this function comes from the emptiness in
\</innerElement\>\</outerElement\> in an element like this.\<outerElement\>Some text\<innerElement\>Some more text\</innerElement\>\</outerElement\>

```console
[
  ' 15°', '15°', 'max',  '',    ' 15°', '15°',
  'max',  '',    ' 14°', '14°', 'max',  '',
  ' 14°', '14°', 'max',  '',    ' 14°', '14°',
  'max',  '',    ' 15°', '15°', 'max',  '',
  ' 15°', '15°', 'max',  '',    ' 15°', '15°',
  'max',  '',    ' 14°', '14°', 'max',  '',
  ' 14°', '14°', 'max',  '',    ' 14°', '14°',
  'max',  '',    ' 14°', '14°', 'max',  '',
  ' 14°', '14°', 'max',  '',    ' 13°', '13°',
  'max',  ''
]
```

If you want to have the empty spaces, like above make sure **getEmptySpaces** is set to true


#### nonGreedyFindMultiLineElementsByType or greedyFindMultiLineElementsByType

```js
nonGreedyFindMultiLineElementsByType(dataToParse, elementMatch)
```

```js
greedyFindMultiLineElementsByType(dataToParse, elementMatch)
```

To get a multi-line element you use __nonGreedyFindMultiLineElementsByType__
The difference is that the non-greedy version will break after the first </> of that element, while the greedy will look for the last possible closing tag, of the same element
it looks for the opening and closing tag.
You pass your data string as __dataToParse__. To find a specific class name or element ID pass this as __elementMatch__. 

#### greedyFindMultiLineElementsByAttributeOrText or nonGreedy

The same idea applies here, to break early or not

```js
greedyFindMultiLineElementsByAttributeOrText(dataToParse, textOrAttributeMatch)
```
```js
nonGreedyFindMultiLineElementsByAttributeOrText(dataToParse, textOrAttributeMatch)
```

This will allow you to get elements with attributes like class name or text strings.

### Participate in this module

If you want to participate in this module, feel free to do pull requests towards the main branch.
I will review them when time allows. Please make sure your commit message is clear on what it is trying to solve or add.
If there are issues with how the module works, create and issue, with an example for me to review. 

### Note

This is a school project and may or may not be maintained after the course.