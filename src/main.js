import './index.html';
import './styles/main.scss';
import Riddles from './components/WordContainer/DescribeWord/riddles.json';

import Gallows from "./components/Gallows/gallows.js";
import wordContainer from "./components/WordContainer/wordContainer.js";
import modal from './components/Modal/modal.js';



const body = document.querySelector('body');
body.append(Gallows);
body.append(wordContainer);
body.append(modal);

//--keyboard ------------
const keyboardContainer = wordContainer.querySelector(".keyboard__wrapper");
const keyboardButtons = document.querySelectorAll('.keyboard__button');


//-----Guesses-------------------
let counterGuesses = 0;
let counterRightLetters = 0;

//--gallows ------------------
const humanParts = Gallows.querySelectorAll(".human__part");

//-----Word---------
let numberWord = 0;
let wordNode = document.querySelector('.word');
const describeWordWrapper = document.querySelector('.describeWord__wrapper');

//---digit------
let digitGuesses = wordContainer.querySelector(".guesses__digit");


//----Modal ------------------
const modalWindow = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalText = document.querySelector('.modal__text');

//-------Play-again--------
const modalButton = document.querySelector('.modal__button');


function putKeyboard(e) {
  if (e.target.className === "keyboard__button") {
    let putLetter = e.target.innerText.toLowerCase();
    let massiveLettersWord = wordContainer.querySelectorAll(".word__letter");
    let indexLetter = Array.from(massiveLettersWord).map(e => e.textContent).indexOf(putLetter);

    let modalSecretWord = document.querySelector('.modal__secret-word');
    let wholeWord = Array.from(massiveLettersWord).map(e => e.textContent).join('');




    if (massiveLettersWord[indexLetter]) {
      massiveLettersWord[indexLetter].style.color = "black";
      massiveLettersWord[indexLetter].style.borderBottom = "none";
      
      counterRightLetters += 1;
    } else {
      humanParts[counterGuesses].style.background = "red"
      counterGuesses += 1;
      digitGuesses.textContent = counterGuesses;
    }

    e.target.style.background = "grey";
    e.target.classList.toggle('button-no-active');
    modalSecretWord.textContent = `Secret word: ${wholeWord}`;

    console.log(massiveLettersWord.length);

    if ((counterGuesses === 6) || (counterRightLetters === massiveLettersWord.length)) {
      openModal();
    }
  }

}


function openModal() {
  console.log(counterGuesses === 6);
  console.log( counterRightLetters);

  if (counterGuesses === 6) {
    modalTitle.textContent = "No congratulations!";
    modalText.textContent = "You lost";
  } else {
    modalTitle.textContent = "Congratulations!";
    modalText.textContent = "You won. Good job";
  }
  modalWindow.classList.toggle('active');
  wordNode.remove();
}

keyboardContainer.addEventListener("click", putKeyboard)





function addNewWord() {
  console.log(numberWord);
  document.querySelector(".hint").textContent = Riddles[numberWord].description;
  let newWord = Riddles[numberWord].answer;
  // let countLettersNewWord = Riddles[numberWord].answer.length;
  console.log(newWord);
  console.log(newWord.length);
  createNewWord();

  console.log(describeWordWrapper);


  function createNewWord() {
    console.log(numberWord);
    let ulNewWord = document.createElement('ul');
    ulNewWord.classList.add('word');
    let massiveNewWord = newWord.split('');
    console.log(massiveNewWord);

    for (let i = 0; i < newWord.length; i++) {
      let liNewWord = document.createElement('li');
      liNewWord.classList.add('word__letter');
      liNewWord.textContent = massiveNewWord[i];
      ulNewWord.append(liNewWord);
    }
    // console.log(describeWordWrapper);
    // console.log(ulNewWord);
    describeWordWrapper.prepend(ulNewWord);
  }

}

function playAgain() {
  counterGuesses = 0;
  digitGuesses.textContent = counterGuesses;
  humanParts.forEach(e => { e.style.background = "white" });
  keyboardButtons.forEach(e => e.style.background = "yellow");
  keyboardButtons.forEach(e => e.classList.remove('button-no-active'));

  numberWord += 1;
  addNewWord();

  // wordContainer.querySelectorAll(".word__letter");
  modalWindow.classList.toggle('active');

}


modalButton.addEventListener("click", playAgain);