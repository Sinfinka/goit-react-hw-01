import { Profile } from "./profile/Profile";
import userData from "../input-data/userData.json";
import "./App.css";

export const App = () => {
  return (
    <>
      <Profile userData={userData} />
    </>
  );
};