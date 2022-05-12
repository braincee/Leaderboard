import { urlScores } from './api_url.js';

const persons = document.querySelector('.board-1 .table');

const outcomeScores = async () => {
  const newScore = await urlScores();
  newScore.result.forEach((score) => {
    const person = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = score.score;
    person.className = 'table-records';
    person.textContent = `${score.user}`;
    person.appendChild(span);
    persons.appendChild(person);
  });
};

export default outcomeScores;
