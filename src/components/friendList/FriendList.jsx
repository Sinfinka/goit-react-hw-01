import { FriendListItem } from "../friendListItem/FriendListItem";
import css from "./friendList.module.css";

export const FriendList = ({ friendData }) => {
  console.log(friendData);
  return (
    <ul className={css.friendList}>
      {friendData.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};
