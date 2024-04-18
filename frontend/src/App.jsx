import { useState } from 'react'
import './App.css'
import { AddCard } from './components/add'
import { Card } from './components/cards'

function App() {
  const [teams, setTeams] = useState([]);
  fetch("http://localhost:3000/team")
    .then(async function(res){
      const json = await res.json();
      setTeams(json.teams);
    })
  return (
    <div className='team'>
      <AddCard></AddCard> 
      <Card teams={teams}></Card>
    </div>
  )
}

export default App
