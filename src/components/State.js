import React, { createContext, useContext, useReducer } from "react";
import addReducer from "../store/reducers";
import * as selectors from "../store/selectors";

const StateContext = createContext({
    state: {}, dispatch(evt) {}, selectors: {}
});

export const useState = () => useContext(StateContext).state;
export const useDispatch = () => useContext(StateContext).dispatch;
export const useSelectors = () => useContext(StateContext).selectors;

export const StateProvider = ({ initialState, children }) => {
    const [state, dispatch] = useReducer(addReducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch, selectors }}>
            {children}
        </StateContext.Provider>
    )
}