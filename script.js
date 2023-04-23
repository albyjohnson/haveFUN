function clearAll() {

    const memeContainer = document.querySelector(".meme-content");
    const quoteContainer = document.querySelector(".quote-content");
    const riddleContainer = document.querySelector('.riddle-content');

    memeContainer.innerHTML= " ";
    quoteContainer.innerHTML= " ";
    riddleContainer.innerHTML= " ";
}

/**
 * TODO:
 * - Show a random Meme in the correct location
 * - Never show more than 1 meme at a time
 */
let randomMemeUrl=[];

function showMeme() {
   // Value is a string representing image URL

  const randomMemeUrl = getRandomData("memes");
  const container = document.querySelector(".meme-content");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", randomMemeUrl);

 clearAll();

 container.appendChild(newImg);

}
/**
 * TODO:
 * - Show a random quote in the correct location
 * - Never show more than 1 quote at a time
 */
function showQuote() {
    
  // Value should be in format: { quote: '', author: '' }
  const randomQuote = getRandomData("quotes");

   const quote= document.createElement("p");
   const author= document.createElement("p");
   quote.textContent = randomQuote.quote;
   author.textContent = "-" + randomQuote.author;
   
   clearAll();
   const container = document.querySelector(".quote-content");
   container.appendChild(quote);
   container.appendChild(author);
   

}

/**
 * TODO:
 * - Show a random riddle in the correct location
 * - Never show more than 1 riddle at a time
 * - Always hide the riddle's answer initially
 */
function showRiddle() {
  // Value should be in format: { question: '', answer: '' }

  const randomRiddle = getRandomData("riddles");

  // const question=randomRiddle.question;
  //const answer = randomRiddle.answer;
  //we can write above code in one line

const {question,answer}=randomRiddle;

const questionElem = document.createElement('p');
questionElem.textContent=question;

const answerElem = document.createElement('p');
answerElem.textContent=answer;

answerElem.setAttribute("id","riddle-answer");
answerElem.hidden=true;

const container = document.querySelector(".riddle-content");
clearAll();
container.appendChild(questionElem);
container.appendChild(answerElem);
}

/**
 * TODO: Unhide the riddle's answer
 * - If there is no riddle shown, alert the user that there is no riddle
 * - If there is a riddle shown and an answer shown, alert the user
 *   that the answer is already revealed
 * - If there is a riddle shown but no answer, unhide the answer!
 */
function revealAnswers() {
const riddleContainer=document.querySelector(".riddle-content");
const riddle = riddleContainer.querySelector('p');
const answer=document.querySelector('#riddle-answer');


if(riddle&&answer.hidden){
    answer.hidden=false;
}
else if(riddle){
    alert("the anser is already revealed");
}
else{
    alert("there is no riddle to display the answer");
}
}

function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

const memes = [
  "https://img-9gag-fun.9cache.com/photo/a1RA5r6_460swp.webp",
  "https://preview.redd.it/go4mlbqv0cta1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=7eb39c461995f3e81eb86de6a5086ce9f6558808",
  "https://preview.redd.it/3d6s1bcj4fka1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=8f8578ec345e84677a1ea3dcfd5cbdff904615ec",
  "https://i.chzbgr.com/thumb800/19401477/hDBFF0A1E/memes-computer-science-stem-funny-memes-programmers-coding-memes-computer-math-computer-guy",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Mark-Zuckerberg-Meme.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/PHP-vs-Java-vs-JavaScript.jpg"
 
];

const quotes = [
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  }
];

const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
  },
];

// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  quotes,
  riddles,
};