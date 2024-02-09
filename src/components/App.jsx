import userData from "../input-data/userData.json";
import friendData from "./../input-data/friendData.json";

import { Profile } from "./profile/Profile";
import { FriendList } from "./friendList/FriendList";

import "./App.css";

export const App = () => {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friendData={friendData} />
    </>
  );
};
