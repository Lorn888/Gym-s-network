import { createContext, useReducer } from "react";

//new context
export const GRIContext = createContext();

export const griReducer = (state, action) => {
  switch (action.type) {
    case "SET_GRI":
      return {
        gri: action.payload,
      };
    case "CREATE_GRI":
      return {
        gri: [action.payload, ...state.gri],
      };
    default:
      return state;
  }
};
//so the component tree can access that context
export const GRIContextProvider = ({ children }) => {
  //wrap whatever part of the app needs the context
  const [state, dispatch] = useReducer(griReducer, {
    gri: null,
  });

  // dispatch({type: 'SET_GRI', payload: [{}, {}]}). <--Action

  return;
  <GRIContext.Provider value={{ state, dispatch }}>
    {children}
  </GRIContext.Provider>;
};
