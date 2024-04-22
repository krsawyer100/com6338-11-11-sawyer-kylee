const getPoemBtn = document.getElementById('get-poem')
const poemEl = document.getElementById('poem')
const poemURL = 'https://poetrydb.org/random,linecount/1;12/author,title,lines.json'

const getJSON = url => fetch(url).then(res => res.json())

const pipe = (...fns) => firstArg => fns.reduce((returnValue, fn) => fn(returnValue), firstArg)

const makeTag = tag => str => `<${tag}>${str}</${tag}>`

//helper functions
const makeH2 = makeTag('h2')
const makeEm = makeTag('em')
const makeH3 = makeTag('h3')
const makeP = makeTag('p')
const makeBr = makeTag('br')

const makeAuthor = pipe(makeEm, makeH3)
const makeStanzas = pipe(makeP, makeBr)

// complete this function
const makePoemHTML = data => 
makeH2(data[0].title) + 
makeAuthor("by " + data[0].author) + 
console.log(data[0].lines)


// data[0].lines.filter(lines => lines !== "")

// attach a click event to #get-poem
getPoemBtn.onclick = async function() {
  // renders the HTML string returned by makePoemHTML to #poem
  poemEl.innerHTML = makePoemHTML(await getJSON(poemURL))
  console.log(poemEl)

}