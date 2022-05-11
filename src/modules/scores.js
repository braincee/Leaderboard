import { urlScores } from './api_url.js';

const lists = document.querySelector('.board-1 table');

const outcomeScores = async () => {
  const newScore = await urlScores();
  newScore.outcome.forEach((score) => {
    const list = document.createElement('li');
    list.className = 'table-records';
    list.textContent = `${score.user}: ${score.score}`;
    lists.appendChild(list);
  });
};

export default outcomeScores;
