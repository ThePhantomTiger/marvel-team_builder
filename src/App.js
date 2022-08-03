import './App.css';
import NavBar from './components/NabBar';
import Hero from './components/Hero';
import CharacterSelector from './components/CharacterSelector';

import { useState } from 'react';
import TeamDisplayer from './components/TeamDisplayer';

function App() {

  const [team, setTeam] = useState([]);


  return (
    <div className="App">
      <NavBar />
      <Hero />
      <CharacterSelector team={team} setTeam={setTeam} />
      <TeamDisplayer team={team} setTeam={setTeam} />
    </div>
  );
}

export default App;
