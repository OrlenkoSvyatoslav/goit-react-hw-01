import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img className={css.imgProfile} src={image} alt="User avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListitem}>
          <span className={css.profileItemTitle}>Followers</span>
          <span className={css.profileItemText}>{followers}</span>
        </li>
        <li className={css.profileListitem}>
          <span className={css.profileItemTitle}>Views</span>
          <span className={css.profileItemText}>{views}</span>
        </li>
        <li className={css.profileListitem}>
          <span className={css.profileItemTitle}>Likes</span>
          <span className={css.profileItemText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
