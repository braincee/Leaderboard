const api_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const newGame = async () => {
  const response = { name: 'My new Game' };
  const outcome = await fetch(`${api_url}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  });
  await outcome.json();
};

let api_url_scores;

export const urlScores = async () => {
  const outcome = await fetch(`${api_url}/games/Zl4d7IVkemOTTVg2fUdz/scores`);
  api_url_scores = await outcome.json();
  return api_url_scores;
};

export const newScore = async (user, score) => {
  const response = { user, score };
  const outcome = await fetch(`${api_url}/games/Zl4d7IVkemOTTVg2fUdz/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  });
  return outcome.json();
};