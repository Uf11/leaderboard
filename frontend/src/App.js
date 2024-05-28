import React,{useEffect, useState} from 'react';
import Leaderboard from './components/Leaderboard.js';

const App = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = () => {
      fetch('http://localhost:3001/teams')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setTeams(data.teams);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main">
      <Leaderboard teams={teams} />
    </div>
  );
};

export default App;
