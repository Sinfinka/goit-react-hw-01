import userData from "../../input-data/userData.json";
import css from "./Profie.module.css";

console.log(userData);

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <>
      {/* {username} {tag} {location} {avatar} {stats.followers} {stats.views}{" "}
      {stats.likes} */}
      <div className={css.conteiner}>
        <div className={css.userInfo}>
          <img className={css.avatar} src={avatar} alt="User avatar" />
          <p className={css.name}>{username}</p>{" "}
          <p className={css.tag}>@{tag}</p>{" "}
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
          <li className={css.followers}>
            <span>Followers</span>{" "}
            <span className={css.value}>{stats.followers}</span>
          </li>
          <li className={css.views}>
            <span>Views</span> <span className={css.value}>{stats.views}</span>
          </li>
          <li className={css.likes}>
            <span>Likes</span> <span className={css.value}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
