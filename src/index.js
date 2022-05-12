import './style.css';

import { newScore } from './modules/api_url.js';
import outcomeScores from './modules/scores.js';

const form = document.querySelector('.name-score');

const newScoreApi = () => {
  const name = form.elements.name.value;
  const score = form.elements.score.value;
  if (score !== '' && name !== '') {
    newScore(name, score);
  }
};

document.addEventListener('click', (e) => {
  if (e.target.className === 'submit') {
    e.preventDefault();
    newScoreApi();
  } else if (e.target.className === 'refresh') {
    const persons = document.querySelector('.board-1 .table');
    while (persons.firstChild) {
      persons.removeChild(persons.firstChild);
    }
    outcomeScores();
  }
});

document.addEventListener('DOMContentLoaded', () => { outcomeScores(); });
