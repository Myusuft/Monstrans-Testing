import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocationContext } from './LocationContext';

const DetailCharacter = () => {
  const { id } = useParams();
  const { locations, updateLocations } = useLocationContext();
  const [character, setCharacter] = useState(null);
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.log(error));
  }, [id]);

  const handleAssignLocation = () => {
    // Lakukan proses assign karakter ke lokasi di sini
    if (!locationName) {
      alert('Please enter a unique location name.');
      return;
    }

    const existingLocation = locations.find(loc => loc.name === locationName);
    if (existingLocation) {
      // Jika lokasi sudah ada, tambahkan karakter ke lokasi yang sudah ada
      const updatedLocations = locations.map(loc => {
        if (loc.name === locationName) {
          return {
            ...loc,
            characters: [...loc.characters, character],
          };
        }
        return loc;
      });
      updateLocations(updatedLocations);
    } else {
      // Jika lokasi belum ada, buat lokasi baru dan tambahkan karakter ke lokasi baru
      const newLocation = {
        id: locations.length + 1,
        name: locationName,
        characters: [character],
      };
      updateLocations([...locations, newLocation]);
    }
    setLocationName('');
  };

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      
      <input
        type="text"
        placeholder="Enter location name"
        value={locationName}
        onChange={handleLocationNameChange}
      />
      
      <button onClick={handleAssignLocation}>Assign to Location</button>

      <div>
        <h2>Assigned Locations:</h2>
        <ul>
          {locations.filter(loc => loc.characters.includes(character)).map(loc => (
            <li key={loc.id}>{loc.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailCharacter;
