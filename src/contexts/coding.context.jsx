import { createContext, useEffect, useReducer } from "react";

export const CodingContext = createContext({
  contest: null,
  setContest: () => null,
  potd: null,
  setPotd: () => null,
  apt: null,
  setAPT: () => null
});

export const USER_ACTION_TYPES = {
  SET_CONTEST: "SET_CONTEST",
  SET_POTD: "SET_POTD",
  SET_APT: "SET_APT",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CONTEST:
      return {
        ...state,
        contest: payload,
      };
    case USER_ACTION_TYPES.SET_POTD:
      return {
        ...state,
        potd: payload,
      };
    case USER_ACTION_TYPES.SET_APT:
      return {
        ...state,
        apt: payload,
      };
    default:
      throw new Error(`Unknown action type: "${type}" in userReducer`);
  }
};

const INITIAL_STATE = {
  contest: null,
  potd: null,
  apt: null
};
export const CodingProvider = ({ children }) => {

  const [{ contest, potd, apt }, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE
  );

  const setContest = (contest) => {
    dispatch(USER_ACTION_TYPES.SET_CONTEST,contest);
  };

  const setPotd = (potd) => {
    dispatch(USER_ACTION_TYPES.SET_POTD,potd);
  };

  const setAPT = (apt) => {
    dispatch(USER_ACTION_TYPES.SET_APT,apt);
  };

  const value = {contest,potd,apt};

  useEffect(() => {

  }, []);

  return <CodingContext.Provider value={value}>{children}</CodingContext.Provider>;
};
