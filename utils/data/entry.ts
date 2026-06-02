
type EntryType = {
  image: string;
  username: string;
  caption: string;
  likes: number;
  views: number;
  score: number
};

const entryData: EntryType[] = [
  
  {
    image: '/img/face/face-1.png',
    username: '@loverboy',
    caption: 'This is a text caption',
    likes: 34,
    views: 29,
    score: 56,
  },

  {
    image: '/img/face/face-2.png',
    username: '@gemgirl',
    caption: 'This is a text caption',
    likes: 34,
    views: 29,
    score: 56,
  },

  {
    image: '/img/face/face-3.png',
    username: '@saucekid',
    caption: 'This is a text caption',
    likes: 34,
    views: 29,
    score: 56,
  },
  
];

export default entryData;