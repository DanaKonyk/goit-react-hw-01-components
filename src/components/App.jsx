import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FriendsList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
