import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <h1>User List</h1>

      <ul>
        {user.map((u) => (
          <li key={u.id}>
            <h3>{u.name}</h3>
            <p>{u.email}</p>
            <p>{u.phone}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App