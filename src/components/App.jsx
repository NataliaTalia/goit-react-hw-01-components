import Profile from './Profile/Profile';
import user from 'data/user.json';
import Statistics from './Statistics/Statistics';
import data from 'data/data.json';
import FriendList from './FriendList/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        likes={user.stats.likes}
        views={user.stats.views}
        followers={user.stats.followers}
      />

      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
