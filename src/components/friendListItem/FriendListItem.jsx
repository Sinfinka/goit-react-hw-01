import React from "react";
import friendData from "./../../input-data/friendData.json";
import css from "./friendListItem.module.css";
import clsx from "clsx";

console.log(friendData);
console.log(css);

export const FriendListIItem = (props) => {
  return (
    <ul className={css.friendList}>
      {props.friendData.map((friend) => {
        const isOnline = clsx(css.status, friend.isOnline && css.isOnline);
        return (
          <li className={css.friend} key={friend.id}>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="Friend avatar"
            />
            <p className={css.name}>{friend.name} </p>
            <p className={isOnline}>{friend.isOnline ? "Online" : "Offline"}</p>
          </li>
        );
      })}
    </ul>
  );
};
