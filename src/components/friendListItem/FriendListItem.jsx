import friendData from "./../../input-data/friendData.json";

console.log(friendData);

export const FriendListIItem = (props) => {
  return (
    <ul className="ddd">
      {props.friendData.map((friend) => (
        <li className="efrf" key={friend.id}>
          <img src={friend.avatar} alt="Friend avatar" />
          <p>{friend.name} </p>
          <p>{friend.isOnline} </p>
        </li>
      ))}
    </ul>
  );
};
