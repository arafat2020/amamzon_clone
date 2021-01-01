import React, { createContext, useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState(0);
  const [location, setLocation] = useState([]);
  const [count,reCount] = useReducer(reducer,initialState)
  

  return (
    <UserContext.Provider
      value={{
        name,
        location,
        setName,
        setLocation,
        count,
        reCount
      }}
    >
      {children}
    </UserContext.Provider>
  );
};