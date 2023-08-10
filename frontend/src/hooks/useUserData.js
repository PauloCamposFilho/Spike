import { indigo } from "@material-ui/core/colors";
import { fetchCurrentUserData } from "../helpers/fetchCurrentUserData";
import { reducer } from "../helpers/reducer";
import { useEffect, useReducer } from "react";
import { ACTIONS } from "../constants/ACTIONS";

const initialState = {
  currentPlayArea: null,
  qrModal: {
    isOpen: false,
    qrDetails: {
      label: '',
      endpoint: '',
    },
  },
  userData: null,
}

const useUserData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // assume default user for now
    fetchCurrentUserData('1')
      .then((res) => {
        dispatch({ type: ACTIONS.UPDATE_USER_DATA, data: res})
      })
  }, [])

  // return state and dispatch
  return {
    state,
    dispatch,
  }
}



export { ACTIONS, initialState, useUserData}