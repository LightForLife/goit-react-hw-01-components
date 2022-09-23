import { Profile } from 'components/Profile/Profile';
import user from 'path/user';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'path/data';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
    </div>
  );
};
