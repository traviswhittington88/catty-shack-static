import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StaticProfile from './StaticProfile';
import { now } from 'moment';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const meow = {
    meow_id: 1,
    userhandle: 'Tex',
    body: 'Howdy',
    user_image: '',
    date_created: now(),
    likeCount: 5,
    commentCount: 2
  };

  const user = {
    user_name: 'Tex',
    likes: [{ id: 1, user_name: 'travis', meow_id: 3 }]
  };

  ReactDOM.render(
    <Router>
      <StaticProfile user={user} />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
