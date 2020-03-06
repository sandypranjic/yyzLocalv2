// store.js
import React, { createContext, useContext, useReducer } from 'react';
import dataResults from "./dataResults";

const housingData = dataResults();

const StoreContext = createContext();
const initialState = { housingData };

const reducer = (state, action) => {
    switch (action.type) {
        case "neighbourhood":
            return {
                housing: state.housing,
                message: action.message
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);