import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

const DUMMY_USERS = [
  {
    id:1,
    name: 'Ankit Verma',
    age: 27
  },
  {
    id:2,
    name: 'Shweta Verma',
    age: 25
  }
]

function App() {
  const [currentUsers, setCurrentUsers] = useState(DUMMY_USERS);

  const addUserHandler = user => {
    setCurrentUsers(prevUsers => {
      return [ ...prevUsers, user];
    });
  }

  return (
    <div className='container'>
      <AddUser onUserAdd = {addUserHandler}/>
      <UsersList users={currentUsers}/>
    </div>
  );
}

export default App;
