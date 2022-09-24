import PropTypes from 'prop-types';
import { FriendItem } from './Friend.styled';
import { StatusIsOnline } from './Friend.styled';
import { AvatarFriend } from './Friend.styled';
import { NameFriend } from './Friend.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <StatusIsOnline status={isOnline}></StatusIsOnline>
      <AvatarFriend src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </FriendItem>
  );
};

// FriendListItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };
