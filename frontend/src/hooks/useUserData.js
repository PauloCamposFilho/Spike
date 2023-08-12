import { indigo } from "@material-ui/core/colors";
import { fetchCurrentUserData } from "../helpers/fetchCurrentUserData";
import { reducer } from "../helpers/reducer";
import { useEffect, useReducer } from "react";
import { ACTIONS } from "../constants/ACTIONS";
import { generateGridData } from "../helpers/generateGridData";

const initialState = {
  currentPlayArea: null,
  qrModal: {
    isOpen: false,
    qrDetails: {
      label: '',
      endpoint: '',
    },
  },
  userData: {
    matchesData: [],
    playerAreaData: {},
    playerData: {},
    teamsData: {
      teams_current: [],
      teams_history: [],
    },
    gridData: [],
    teamsMatchesData: [],
    rankings: {
      teams: [],
      playerRankings: []
    }
  },
  teamData: {
    teamInfoData: {},
    teamMatchesData: [],
    teamCurrentRosterData: [],
    teamPastPlayersData: [],

  }
}

const useUserData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // assume default user for now
    const updateInitialState = async () => {
      const userData = await fetchCurrentUserData(1);
      // const gridData = generateGridData(userData.teamsData.teams_current);
      dispatch({ type: ACTIONS.UPDATE_USER_DATA, data: userData });
    }
    updateInitialState();
  }, [])

  // return state and dispatch
  return {
    state,
    dispatch,
  }
}





export { initialState, useUserData }