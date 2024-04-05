import React, { useState, useEffect } from 'react';
import { useLocationContext } from './LocationContext';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const CharacterByLocation = () => {
  const { locations } = useLocationContext();
  const [storedLocations, setStoredLocations] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('locations'));
    if (storedData) {
      setStoredLocations(storedData);
    }
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('locations'));
    if (storedData) {
      setStoredLocations(storedData);
    }
  }, [locations]);

  return (
    <div>
      <h1  style={{ textAlign: 'center' }}>Character By Location</h1>
      <div>
        <h2  style={{ textAlign: 'center' }}>Locations:</h2>
        <ListGroup>
          {storedLocations.map(location => (
            <ListGroup.Item
              key={location.id}
              className="d-flex justify-content-between align-items-start"
              style={{ margin: '0 20px' }}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{location.name}</div>
                <ul>
                  {location.characters.map(character => (
                    <li key={character.id}>{character.name}</li>
                  ))}
                </ul>
              </div>
              <Badge bg="primary" pill>
                Total: {location.characters.length}
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default CharacterByLocation;
