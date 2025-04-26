import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext({
  //for the initialise for context
  currentUser: null,
  setCurrentUser: () => null,
  leaderBoard: null,
  setLeaderBoard: () => null,
  isLogin: null,
  setLogin: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_LEADERBOARD: "SET_LEADERBOARD",
  SET_LOGIN: "SET_LOGIN"
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SET_LEADERBOARD:
      return {
        ...state,
        leaderBoard: payload,
      };
    case USER_ACTION_TYPES.SET_LOGIN:
      return {
        ...state,
        isLogin: true
      }
    default:
      throw new Error(`Unknown action type: "${type}" in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
  leaderBoard: null,
  isLogin: null
};
export const UserProvider = ({ children }) => {

  const [{ currentUser, leaderBoard, isLogin }, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE
  );

  const setCurrentUser = (user) => {
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
  };
  const setLeaderBoard = (leaderBoard) => {
    dispatch({type: USER_ACTION_TYPES.SET_LEADERBOARD, payload: leaderBoard});
  };
  const setLoginHandler = () => {
    dispatch({type: USER_ACTION_TYPES.SET_LOGIN})
  }

  const value = { currentUser, leaderBoard, isLogin, setLoginHandler};

  useEffect(() => {

  }, []);

  //we will use above state from any component wrapped inside UserContext.Provider tree
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
