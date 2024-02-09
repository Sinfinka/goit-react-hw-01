import userData from "../../input-data/userData.json";

console.log(userData);

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <>
      {/* {username} {tag} {location} {avatar} {stats.followers} {stats.views}{" "}
      {stats.likes} */}
      <div>
        <div>
          <img src={avatar} alt="User avatar" />
          <p>{username}</p> <p>@{tag}</p> <p>{location}</p>
        </div>
        <ul>
          <li>
            <span>Followers</span> <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span> <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span> <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
