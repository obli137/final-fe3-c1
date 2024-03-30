import { createContext, useContext, useState } from "react";

const DentistStates = createContext();

const Context = ({ children }) => {
  const [favs, setFavs] = useState([]);

  return (
    <DentistStates.Provider value={{ favs, setFavs }}>
      {children}
    </DentistStates.Provider>
  );
};

export default Context;

export const useDentistStates = () => useContext(DentistStates);
