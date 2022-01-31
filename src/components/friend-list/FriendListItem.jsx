export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </li>
  );
};





