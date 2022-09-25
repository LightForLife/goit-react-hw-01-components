import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: block;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  max-width: 500px;
  padding: 3px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #9edaff;
  padding: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  & + & {
    margin-top: 10px;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const StatusIsOnline = styled.span`
  display: block;
  margin-right: 12px;
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
  margin-right: 30px;
`;

export const NameFriend = styled.p`
  font-weight: 700;
  font-size: 24px;
`;
