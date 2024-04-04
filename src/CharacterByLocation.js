import React from 'react';
import { useLocationContext } from './LocationContext';

const CharacterByLocation = () => {
  const { locations } = useLocationContext();

  return (
    <div>
      <h1>Character By Location</h1>
      <div>
        <h2>Locations:</h2>
        <ul>
          {locations.map(location => (
            <li key={location.id}>
              {location.name}
              <ul>
                {location.characters.map(character => (
                  <li key={character.id}>{character.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterByLocation;
