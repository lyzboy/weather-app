// Suggested code may be subject to a license. Learn more: ~LicenseLog:2853419873.
import React, { createContext, useState } from "react"

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({lat: null, lon:null});

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};