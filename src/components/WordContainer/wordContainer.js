import WordContainer from './wordContainer.html';
import htmltoElement from '../../utils/htmltoElement';

import keyboard from '../WordContainer/Keyboard/keyboard';
import describeWord from '../WordContainer/DescribeWord/describeWord';


let wordContainer = htmltoElement(WordContainer);
wordContainer.append(describeWord);
wordContainer.append(keyboard);




export default wordContainer;
