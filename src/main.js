import './index.html';
import './styles/main.scss';
import Riddles from './components/WordContainer/DescribeWord/riddles.json';

import Gallows from "./components/gallows/gallows.js";
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

  if (e.target.className === "keyboard__button" || e.key) {
    console.log(e);

    let putLetter;
    let activeButton;

    if (e.target.className === "keyboard__button") {
      putLetter = e.target.innerText.toLowerCase();
      activeButton = e.target;
    } else {
      putLetter = e.key.toUpperCase();
      let buttonVirtual = Array.from(keyboardButtons).filter(e => e.outerText === putLetter);
      activeButton = buttonVirtual[0];
      putLetter = e.key;

    }


    let massiveLettersWord = wordContainer.querySelectorAll(".word__letter");
    let indexLetter = Array.from(massiveLettersWord).map(e => e.textContent).indexOf(putLetter);
    let doubleIndexLetter = Array.from(massiveLettersWord).map(e => e.textContent).lastIndexOf(putLetter);


    let modalSecretWord = document.querySelector('.modal__secret-word');
    let wholeWord = Array.from(massiveLettersWord).map(e => e.outerText).join('');

    if (indexLetter === doubleIndexLetter) {
      if ((massiveLettersWord[indexLetter])) {
        massiveLettersWord[indexLetter].style.color = "black";
        massiveLettersWord[indexLetter].style.borderBottom = "none";
        counterRightLetters += 1;
      } else {
        humanParts[counterGuesses].style.background = "red"
        counterGuesses += 1;
        digitGuesses.textContent = counterGuesses;
      }
    }

    if (!(indexLetter === doubleIndexLetter)) {
      massiveLettersWord[indexLetter].style.color = "black";
      massiveLettersWord[doubleIndexLetter].style.color = "black";
      massiveLettersWord[indexLetter].style.borderBottom = "none";
      massiveLettersWord[doubleIndexLetter].style.borderBottom = "none";
      counterRightLetters += 2;
    }

    activeButton.style.background = "grey";
    activeButton.classList.toggle('button-no-active');
    modalSecretWord.textContent = `Secret word: ${wholeWord}`;


    if ((counterGuesses === 6) || (counterRightLetters === massiveLettersWord.length)) {
      openModal();
      counterRightLetters = 0;
    }
  }

}


function openModal() {
  if (counterGuesses === 6) {
    modalTitle.textContent = "No congratulations!";
    modalText.textContent = "You lost";
  } else {
    modalTitle.textContent = "Congratulations!";
    modalText.textContent = "You won. Good job";
  }
  let wordNode = document.querySelector('.word');
  wordNode.remove();
  modalWindow.classList.toggle('active');

}

keyboardContainer.addEventListener("click", putKeyboard);


document.addEventListener("keydown", putKeyboard);





function addNewWord() {
  console.log(numberWord);
  document.querySelector(".hint").textContent = Riddles[numberWord].description;
  let newWord = Riddles[numberWord].answer;
  // console.log(newWord);
  // console.log(newWord.length);
  createNewWord();

  function createNewWord() {
    let ulNewWord = document.createElement('ul');
    ulNewWord.classList.add('word');
    let massiveNewWord = newWord.split('');

    for (let i = 0; i < newWord.length; i++) {
      let liNewWord = document.createElement('li');
      liNewWord.classList.add('word__letter');
      liNewWord.textContent = massiveNewWord[i];
      ulNewWord.append(liNewWord);
    }
    describeWordWrapper.prepend(ulNewWord);
  }

}

// ------Play--- again ------------------
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