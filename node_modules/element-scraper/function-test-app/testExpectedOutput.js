const trParseOutput = () => {
  return [
    '<tr>\n' +
      '          <td>Title1</td>\n' +
      '          <td>Title2</td>\n' +
      '          <td>Title3</td>\n' +
      '        </tr>\n' +
      '      ',
    '<tr>\n' +
      '          <td>1</td>\n' +
      '          <td>2</td>\n' +
      '          <td>3</td>\n' +
      '        </tr>\n' +
      '        ',
    '<tr>\n' +
      '          <td>9</td>\n' +
      '          <td>7</td>\n' +
      '          <td>6</td>\n' +
      '        </tr>\n' +
      '        ',
    '<tr>\n' +
      '          <td>4</td>\n' +
      '          <td>5</td>\n' +
      '          <td>6</td>\n' +
      '        </tr>\n'
  ]
}

const classDivEndOuput = () => {
  return [
    '<div class="end">\n' +
      '    <p>Last div</p>\n' +
      '    <strong class="strength">Is here\n' +
      '\n' +
      '    </strong></div>\n'
  ]
}

const tableOuptut = () => {
  return [
    'Title1', 'Title2',
    'Title3', '1',
    '2',      '3',
    '9',      '7',
    '6',      '4',
    '5',      '6'
  ]
}

const greedyPOutput = () => {
  return [
    '<p>Last div</p>\n' +
      '    <strong class="strength">Is here\n' +
      '\n' +
      '    </strong></div>\n' +
      '    <p>This page is intentionally boring and strangely formed to test the app.</p>\n'
  ]
}

const nonGreedyPOutput = () => {
  return [ '<p>Last div</p>\n' ]
}



export {trParseOutput,
        classDivEndOuput,
        tableOuptut,
        greedyPOutput,
        nonGreedyPOutput}