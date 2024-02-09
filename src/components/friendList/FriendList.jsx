// import css from "./friendList.modules.css";
import friendData from "./../../input-data/friendData.json";

import { FriendListIItem } from "../friendListItem/FriendListItem";

export const FriendList = () => {
  return <FriendListIItem friendData={friendData} />;
};
