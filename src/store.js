import { now } from 'moment';

const store = {
  user: {
    id: 1,
    user_name: 'meowee83',
    date_created: now(),
    user_image: 'src/images/showcase.jpg',
    bio: 'Just a small town kitten',
    location: 'Pretzel PA',
    website: 'straycat.com',
    likes: [],
    notifications: []
  },
  meows: [
    {
      meow_id: 1,
      userHandle: 'CoolKat96',
      body: 'Yo sup Meowee',
      user_image: require('/Users/traviswhittington/projects/catty-shack-static/src/images/no-img.png'),
      date_created: '10 hours ago',
      likeCount: 0,
      commentCount: 0
    },
    {
      meow_id: 2,
      userHandle: 'SlimJim47',
      body: 'Loving these new digs',
      user_image: require('/Users/traviswhittington/projects/catty-shack-static/src/images/slimJim.jpg'),
      date_created: '3 hours ago',
      likeCount: 0,
      commentCount: 0
    },
    {
      meow_id: 3,
      userHandle: 'LilKitten',
      body: 'Puuurrific',
      user_image: require('/Users/traviswhittington/projects/catty-shack-static/src/images/lilKitten.jpg'),
      date_created: '2 hours ago',
      likeCount: 0,
      commentCount: 0
    }
  ],
  meow: {},
  profile: null,
  hasError: false,
  error: { message: null },
  loading: false
};

export default store;
