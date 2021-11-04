import React, {createContext, useContext, useReducer} from "react";

//Prepares the dataLayer
export const stateContext = createContext();

//Wrap our app and provide the dataLayer
export const StateProvider = ({ reducer, initialState, children})=>(
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);

//Pull info from dataLayer
export const useStateValue = () => useContext(stateContext);