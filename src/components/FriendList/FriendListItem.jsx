import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friends }) {
  return (
    <>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={css.item} key={id}>
          <span
            className={isOnline ? css.statusOnline : css.statusOffline}
          ></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
