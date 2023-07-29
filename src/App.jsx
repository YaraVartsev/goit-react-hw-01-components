import { Profile } from "./components/social-profile/Profile";
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/friend-list/FriendList';
import { TransactionHistory } from './components/transaction-history/TransactionHistory';




import user from './components/social-profile/user.json';
import friends from './components/friend-list/friends.json';
import statisticalData from './components/statistics/statistical-data.json';
import transaction from './components/transaction-history/transactions.json';



export const App = () => {
  return (
    <>
      <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics stats={statisticalData} />
      <TransactionHistory items={transaction} />
    </>
  );
};





























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
