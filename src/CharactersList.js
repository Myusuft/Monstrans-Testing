

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Characters List</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/detail/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
