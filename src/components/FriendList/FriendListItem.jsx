import css from './FriendListItem.module.css';
import propTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  let status = isOnline ? 'statusOnline' : 'statusOffline';
  return (
    <li className={css.item} style={{ width: '200px' }}>
      <span className={css[status]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p class={'name'}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};

export default FriendListItem;
