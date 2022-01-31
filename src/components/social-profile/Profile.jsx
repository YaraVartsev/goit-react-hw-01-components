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









// {
//   "name": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }