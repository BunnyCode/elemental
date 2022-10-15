import http from 'http'
import https from 'https'

export default class HttpCall {
  url
  constructor(url){
    this.url = url
  }


  // checks if url starts with https
  isHttps = () => {
    const protocol = this.url.split(':')[0]
    if (protocol.toLowerCase() === 'https'){
      return true
    }
    return false
  }


  /**
   * Makes sure the string starts with http or https
   *
   * @param {string} url - Takes a URL as a string to try and check if it starts with http:// or https://
   * @returns - Boolean True or false.
   */
  hasCorrectHtmlProtocol = (url) => {
    const getFirstPartOfSplit = 0
    const protocol = url.split('://')[getFirstPartOfSplit].toLowerCase()
    if (protocol === 'http' || protocol === 'https'){
      return true
    }
    return false
  }


  // Gets raw html from url
  getRawHtml = async () => {
    return new Promise(resolve => {
      try {
        if (this.isHttps(this.url)){
          https.get(this.url, response => {
            this.getHtmlDataFeed(response, resolve)
          })
        } else {
          http.get(this.url, response => {
            this.getHtmlDataFeed(response, resolve)
          })
        }    
      } catch (error) {
        console.error(error)
      }
    })
  }


  // Get html chunks untill we have full page then resolve.
  getHtmlDataFeed = (response, resolve) => {
    let responseData = ''
    response.on('data', (dataChunk) => responseData += dataChunk)
    response.on('end', () => resolve(responseData))
  }
}