import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className="{css.friendList}">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}  
          isOnlaine={friend.isOnlaine}
          avatar={friend.avatar}
          name={friend.name}
        />      
      ))}
    </ul>
  );
};