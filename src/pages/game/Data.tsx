import { nanoid } from 'nanoid';

export interface Card {
  letter: string;
  image: string;
  id: string;
}

export const combinedCardsArray: Card[] = [
  {
    letter: 'A',
    image: '🍎',
    id: nanoid(4),
  },
  {
    letter: 'B',
    image: '🍌',
    id: nanoid(4),
  },
  {
    letter: 'C',
    image: '🍒',
    id: nanoid(4),
  },
  {
    letter: 'G',
    image: '🍇',
    id: nanoid(4),
  },
  {
    letter: 'M',
    image: '🥭',
    id: nanoid(4),
  },
  {
    letter: 'K',
    image: '🥝',
    id: nanoid(4),
  },
];
