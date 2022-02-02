import { FriendListItem } from "./FriendListItem";
import css from '../friend-list/FriendList.module.css';





export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>     
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