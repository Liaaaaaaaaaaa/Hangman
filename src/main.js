import './index.html';
import './styles/main.scss';

import Gallows from "./components/Gallows/gallows.js";
import WordContainer from "./components/WordContainer/wordContainer.js";

const body = document.querySelector('body');
body.append(Gallows);
body.append(WordContainer);

