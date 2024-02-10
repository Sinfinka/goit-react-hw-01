import userData from "../input-data/userData.json";
import friends from "./../input-data/friends.json";
import transactions from "./../input-data/transactions.json";
import { Profile } from "./profile/Profile";
import { FriendList } from "./friendList/FriendList";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
