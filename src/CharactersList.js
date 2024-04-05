import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

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
      <h1 style={{ textAlign: 'center' }}>Characters List</h1>
      <ListGroup>
        {characters.map(character => (
          <ListGroup.Item
            key={character.id}
            className="d-flex justify-content-between align-items-start"
            style={{ margin: '0 20px' }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <Link to={`/detail/${character.id}`}>{character.name}</Link>
              </div>
            </div>
            <Badge bg="primary" pill>
              {character.status}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CharactersList;
