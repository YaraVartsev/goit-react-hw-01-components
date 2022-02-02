export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={avatar} />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>{stats.followers}</li>
        <li>{stats.views}</li>
        <li>{stats.likes}</li>
      </ul>
    </div>
  );
};
