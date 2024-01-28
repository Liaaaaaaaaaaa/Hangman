import WordContainer from './wordContainer.html';
import htmltoElement from '../../utils/htmltoElement';

import keyboard from '../WordContainer/Keyboard/keyboard';
import describeWord from '../WordContainer/DescribeWord/describeWord';


let wordContainer = htmltoElement(WordContainer);
wordContainer.append(describeWord);
wordContainer.append(keyboard);


// const keyboardContainer = wordContainer.querySelector(".keyboard__wrapper");
// let counterGuesses = 0;
// const humanParts = wordContainer.querySelectorAll(".human__part");


// function putKeyboard(e) {
//   if (e.target.className === "keyboard__button") {
//     let putLetter = e.target.innerText.toLowerCase();
//     let massiveLettersWord = wordContainer.querySelectorAll(".word__letter");
//     let indexLetter = Array.from(massiveLettersWord).map(e => e.textContent).indexOf(putLetter);
//     let digitGuesses = wordContainer.querySelector(".guesses__digit");

//     if (massiveLettersWord[indexLetter]) {
//       massiveLettersWord[indexLetter].style.color = "black";
//     }
//     e.target.style.background = "grey";
//     counterGuesses += 1;
//     digitGuesses.textContent = counterGuesses;
//     console.log(humanParts)
//     // humanParts[counterGuesses].style.background = "red"



//   }

// }

// // console.log(keyboardContainer)
// keyboardContainer.addEventListener("click", putKeyboard)



export default wordContainer;
