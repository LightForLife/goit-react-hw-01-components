import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;

  background-color: aqua;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
`;

export const StatusIsOnline = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.status) {
      case true:
        return '#21d100';
      case false:
        return '#ff0000';
      default:
        return '#ffa812';

      // if (props.status) {
      //   return '#21d100';
      // } else return '#ff0000';
    }
  }};
`;

export const AvatarFriend = styled.img`
  &:hover {
    background-color: #ffa812;
  }
`;

export const NameFriend = styled.p``;
