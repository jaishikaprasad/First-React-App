import { useEffect, useState } from 'react';
import './App.css';
import Team from './Team';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const teams = [
    {
      name : "PC Gladiators", 
      members : [
        "Srihari Malipeddi", 
        "Chaitanya Arumalla", 
        "Mitra Priya",
        "Gaikwad Ramchandra C",
        "Jaiswal Ritwik",
        "Shivani",
        "Kumar N Arun",
        "PM: Ibrahim Atia B"
      ]
    },
    {
      name: "PC Avengers",
      members : [
        "Pabba Puneeth K",
        "das Manjushree",
        "Bhingaradiya Sahil R",
        "Kumari Dimple",
        "Dhankhar Tuhini",
        "Hathiramani Sahar",
        "PM : Dehond Jesse"
      ]
    }
  ]

  useEffect(() => {
    teams.forEach((team)=>{
      setShowMembers(prev => (
        {
            ...prev,       // spread syntax
            [team.name] : true
        }
    ) )
    })
  },[])

  // useState() is used for maanging states: store anything that can be changed later.
  const [memberCount, setMemberCount] = useState({}) // memberCount
  const [showMembers, setShowMembers] = useState({}) // show members

  function toggleMembers(teamName) {
    setShowMembers(prev => (
      {
          ...prev,       // spread syntax
          [teamName] : !prev[teamName]
      }
  ) )
  }
  return (
    <div className='container mt-5'>
      <div className="row ">
      {
        teams.map((team, index)=> 
          <div className='card col mx-3 border border-info-subtle border-3 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className="card-body d-flex flex-column justify-content-between">
            <Team key={index} team={team} setMemberCount={setMemberCount} showMembers={showMembers[team.name]} />
            <div className='text-center' >
               {/* if member count exist show count else return 0 */}
              <p className='mt-3'>{team.name} has {memberCount[team.name] || 0 } members.</p> 
              <button  className="btn btn-info" onClick={ () => toggleMembers(team.name)}> {showMembers[team.name] ? "Hide Members" : "Show Members"} </button>
            </div>
            </div>  
          </div>
        )
      }
      </div>
    </div>
  );
}

export default App;
