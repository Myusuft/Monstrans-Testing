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
