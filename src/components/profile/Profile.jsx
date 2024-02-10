import css from "./Profile.module.css";

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <>
      <div className={css.conteiner}>
        <div className={css.userInfo}>
          <img className={css.avatar} src={avatar} alt="User avatar" />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
          <li className={css.followers}>
            <span>Followers</span>
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
