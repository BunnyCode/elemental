export default class RegexpParsing {
  regexPattern
  constructor(regexPattern){
    this.regexPattern = regexPattern
  }


  /**
   * A greedy element parser, does global parsing
   *
   * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
   * @param {string} dataToParse - Takes string to pars for matches.
   * @return {Array} - Returns an array with all matching patterns.
   */
   greedySingleLineElements = (dataToParse, elementMatch) => {
    const parsePattern = `<.*${elementMatch}.*>`
    const applyPatternGlobaly = 'g'
    const captureGroup = 0
    const regExp = new RegExp(parsePattern, applyPatternGlobaly)
    const matchesInPattern = [...dataToParse.matchAll(regExp)]
    return matchesInPattern.map(element => element[captureGroup])
  }


  /**
   * A non greedy element parser, To get text in elements.
   *
   * @param {boolean} getEmptySpaces - True or, false to filter out empty spaces. 
   * @param {Array} dataToParse - Takes array to parse, joins array elements with newline
   * @return {Array} - Returns an array with all matching patterns, Non Greedy RegExp.
   */
  nonGreedySingleLineElementsInnerText = (dataToParse, getEmptySpaces) => {
    const findEmpty = getEmptySpaces ? `>(.*?)<` : `>(.+?)<`
    const joinArrayWith = '\n'
    const captureGroup = 1
    const applyPatternGlobaly = 'g'
    const regExp = new RegExp(findEmpty, applyPatternGlobaly)
    const matchesInPattern = [...dataToParse.join(`${joinArrayWith}`).matchAll(regExp)]
    return matchesInPattern.map((element) => {
        return element[captureGroup]
    })
  }


  /**
   * A non greedy Multiline parser, does global parsing
   *
   * @param {string} elementToMatch - Gets multi and singleline elements by type.
   * @param {string} dataToParse - Takes string to pars for matches.
   * @return {Array} - Returns an array with all matching patterns.
   */
  nonGreedyMultiLineElementsByType = (dataToParse, elementToMatch) => {
    this.regexPattern = `<([${elementToMatch}]+).*?(.*\\n)*?.+?(\\<\\/\\1>[\n ])+?`
    return this.findMultilineElementsWithRegexp(dataToParse, this.regexPattern)
  }


  /**
   * A greedy Multiline parser, does global parsing
   *
   * @param {string} elementToMatch - Gets multi and singleline elements by type.
   * @param {string} dataToParse - Takes string to pars for matches.
   * @return {Array} - Returns an array with all matching patterns.
   */
  greedyMultiLineElementsByType = (dataToParse, elementToMatch) => {
    this.regexPattern = `<([${elementToMatch}]+).*?(.*\\n)*.+?(\\<\\/\\1>[\n ])+`
    return this.findMultilineElementsWithRegexp(dataToParse, this.regexPattern)
  }


  /**
   * Internal helper for element type finder.
   *
   * @param {array} dataToParse - Data to parse with regexp
   * @param {*} regexpPattern - Regexp to use for finding element
   * @returns 
   */
  findMultilineElementsWithRegexp = (dataToParse, regexpPattern) => {
    const captureGroup = 0
    const applyPatternGlobaly = 'g'
    const regExp = new RegExp(regexpPattern, applyPatternGlobaly)
    const matchesInPattern = [...dataToParse.matchAll(regExp)]
    return matchesInPattern.map(element => element[captureGroup])
  }


  /**
   * A greedy Multiline parser, does global parsing
   *
   * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
   * @param {string} dataToParse - Takes string to pars for matches.
   * @return {Array} - Returns an array with all matching patterns.
   */
  greedyMultiLineElementsByAttributeOrText = (dataToParse, textOrAttributeMatch) => {
    const getElementStartAndEndByAttributeOrText = `<([\\w]+).*?${textOrAttributeMatch}(.*\\n)*.+?(\\<\\/\\1>[\n ])`
    const regExp = new RegExp(getElementStartAndEndByAttributeOrText, 'g')
    const matchesInPattern = [...dataToParse.matchAll(regExp)]
    return matchesInPattern.map(element => element[0])
  }


  /**
   * A greedy Multiline parser, does global parsing
   *
   * @param {string} elementMatch - Part of an element that you want to get, like class, id or text.
   * @param {string} dataToParse - Takes string to pars for matches.
   * @return {Array} - Returns an array with all matching patterns.
   */
  nonGreedyMultiLineElementsByAttributeOrText = (dataToParse, textOrAttributeMatch) => {
    const getElementStartAndEndByAttributeOrText = `<([\\w]+).*?${textOrAttributeMatch}(.*\\n)*?.+?(\\<\\/\\1>[\n ])`
    const regExp = new RegExp(getElementStartAndEndByAttributeOrText, 'g')
    const matchesInPattern = [...dataToParse.matchAll(regExp)]
    return matchesInPattern.map(element => element[0])
  }
}