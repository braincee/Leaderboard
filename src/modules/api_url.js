const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

export const newGame = async () => {
  const response = { name: 'My new Game' };
  const result = await fetch(`${apiUrl}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  });
  await result.json();
};

let apiUrlScores;

export const urlScores = async () => {
  const result = await fetch(`${apiUrl}/games/uFmmrkKjMO7S5RsdkjfE/scores`);
  apiUrlScores = await result.json();
  return apiUrlScores;
};

export const newScore = async (user, score) => {
  const response = { user, score };
  const result = await fetch(`${apiUrl}/games/uFmmrkKjMO7S5RsdkjfE/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(response),
  });
  return result.json();
};
