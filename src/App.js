import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const newUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}]
    });
  }

  return (
    <div>
      <AddUser onAddUser={newUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
