import React, { useEffect, useState } from 'react'
import NavBar from '../navBar/navBar';
import { useNavigate, useParams } from 'react-router-dom';
import './user.scss'

function UserPage() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const navigation = useNavigate();
  const { userId } = useParams()

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (userId) {
      const user = users.find(user => user.id === parseInt(userId));
      setSelectedUserId(user);
    }
  }, [userId, users]);
   
  const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const firstTenUsers = jsonData.slice(0, 10);
        setUsers(firstTenUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  const handleUserClick = (userId) => {
    setSelectedUserId(users.find(user => user.id === userId));
    navigation(`/users/${userId}`);
  };

  return (
    <div className='wrapper'>
      <NavBar />
      <div className='container'>
      <h2>User List</h2>
      <ul className='user__list' >
        {users.map(user => (
          <li key={user.id} className='user__item'>
            <span onClick={() => handleUserClick(user.id)}>{user.name}</span>
          </li>  
       
        ))}
      </ul>
      {userId && selectedUserId && (
            <div className='user__details'>
              <h2>User Details</h2>
              <p>Name: {selectedUserId.name}</p>
              <p>Email: {selectedUserId.email}</p>
              <p>Phone: {selectedUserId.phone}</p>
            </div>
          )}
    </div>
   
    </div>
  )
}

export default UserPage;