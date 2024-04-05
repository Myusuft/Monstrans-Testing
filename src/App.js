
import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersList from './CharactersList';
import DetailCharacter from './DetailCharacter';
import CharacterByLocation from './CharacterByLocation';
import { LocationProvider } from './LocationContext';
import Navbar from './Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [locations, setLocations] = useState([]);
  return (
    <Router>
      <LocationProvider locations={locations}>
        <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<CharactersList />} />
            <Route path="/detail/:id" element={<DetailCharacter />} />
            <Route path="/character-by-location" element={<CharacterByLocation />} />
          </Routes>
        </div>
      </LocationProvider>
    </Router>
  );
}

export default App;
