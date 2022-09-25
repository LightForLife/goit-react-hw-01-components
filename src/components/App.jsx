import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import user from 'path/user';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'path/data';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'path/friends';
import { Transaction } from 'components/Transaction/Transaction';
import transactions from 'path/transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </Container>
  );
};
