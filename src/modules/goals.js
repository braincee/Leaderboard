const goals = [
  {
    name: 'Ronaldo',
    goals: 40,
  },
  {
    name: 'Salah',
    goals: 35,
  },
  {
    name: 'Messi',
    goals: 38,
  },
  {
    name: 'Mbappe',
    goals: 30,
  },
  {
    name: 'Neymar',
    goals: 27,
  },
  {
    name: 'Lukaku',
    goals: 25,
  },
];

const players = document.querySelector('.board-1 .table');

const playerGoals = () => {
  goals.forEach((goal) => {
    const player = document.createElement('li');
    player.className = 'table-records';
    player.textContent = `${goal.name}: ${goal.goals}`;
    players.appendChild(player);
  });
};

export default playerGoals;