import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ Children }) => {
    const [basket, dispatch] = useState("hello");
    return <StateContext.Provider value={{ basket, dispatch, }} >
             {Children}
           </StateContext.Provider>
}
export const useStateValue = StateContext.Provider

// https://clone-20557.web.app/
