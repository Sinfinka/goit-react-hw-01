import css from "./friendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline: friendIsOnline }) => {
  const statusClass = clsx(css.status, friendIsOnline && css.isOnline);

  return (
    <div className={css.friend}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{friendIsOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
