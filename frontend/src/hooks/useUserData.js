import { indigo } from "@material-ui/core/colors";
import { fetchCurrentUserData } from "../helpers/fetchData";
import { reducer } from "../helpers/reducer";
import { useEffect, useReducer } from "react";

const ACTIONS = {
  SET_CURRENT_PLAY_AREA: 'SET_CURRENT_PLAY_AREA',
  OPEN_QR: 'OPEN_QR',
  CLOSE_MODAL: 'CLOSE_MODAL',
  // API Actions
  UPDATE_USER_DATA: 'UPDATE_USER_DATA',
}

const initialState = {
  currentPlayArea: null,
  homePlayArea: null,
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