
type EntryType = {
  id: string;
  image: string;
  username: string;
  caption: string;
  likes: number;
  views: number;
  score: number
};

const entryData: EntryType[] = [
  
  {
    id: 'adc123',
    image: '/img/face/face-1.png',
    username: 'access.tosin',
    caption: 'This is a text caption',
    likes: 34,
    views: 29,
    score: 56,
  },

  {
    id: 'acb123',
    image: '/img/face/face-3.png',
    username: 'access.tosin',
    caption: 'This is a text caption',
    likes: 34,
    views: 29,
    score: 56,
  },

  {
    id: 'adc124',
    image: '/img/face/face-2.png',
    username: 'gemgirl',
    caption: 'This is a text caption',
    likes: 34,
    views: 29,
    score: 56,
  },

  {
    id: 'adc125',
    image: '/img/face/face-3.png',
    username: 'saucekid',
    caption: 'This is a text caption',
    likes: 34,
    views: 29,
    score: 56,
  },

  {
    id: 'adc126',
    image: '/img/face/face-2.png',
    username: 'gemgirl',
    caption: 'This is a text caption',
    likes: 34,
    views: 29,
    score: 56,
  },
  
];

export default entryData;