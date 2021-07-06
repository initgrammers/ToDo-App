const colors = [
  '#f44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#673AB7',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#00BCD4',
  '#00BCD4',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FFC107',
  '#795548',
  '#9E9E9E',
];

export const getRandomColor = () =>
  colors[Math.floor(Math.random() * colors.length)];

export const reminderOptions = [
  {
    Name: '10 minutes early',
    Id: 1,
  },
  {
    Name: '30 minutes early',
    Id: 2,
  },
  {
    Name: '1 hour early',
    Id: 3,
  },
  {
    Name: '1 day early',
    Id: 4,
  },
];

export const repeatOptions = [
  {
    Name: 'Daily',
    Id: 1,
  },
  {
    Name: 'Weekly',
    Id: 1,
  },
];
