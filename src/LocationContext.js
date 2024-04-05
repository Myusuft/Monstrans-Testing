import React, { createContext, useState, useContext } from 'react';

const LocationContext = createContext();

export const useLocationContext = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  const updateLocations = (updatedLocation) => {
    setLocations(updatedLocation);
  };

  return (
    <LocationContext.Provider value={{ locations, updateLocations }}>
      {children}
    </LocationContext.Provider>
  );
};
