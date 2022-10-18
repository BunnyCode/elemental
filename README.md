# elemental
Chrome extension. Gets elemental data from a webpage.
  // "content_scripts": [
  //   {
  //     "js": ["scripts/content.js"],
  //     "matches": [
  //       "https://developer.chrome.com/docs/extensions/*",
  //       "https://developer.chrome.com/docs/webstore/*"
  //     ]
  //   }
  // ],

  "build": "webpack --config webpack.config.js; cp manifest.json dist/manifest.json"