import css from './Profile.module.css';
import propTypes from 'prop-types';

const Profile = ({ userImage, tag, name, location, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={userImage} alt={tag} className={css.avatar} width="148" />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  userImage: propTypes.string.isRequired,
  tag: propTypes.string,
  name: propTypes.string.isRequired,
  location: propTypes.string,
  stats: propTypes.shape({
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
  }),
};

export default Profile;
