import { indigo } from "@material-ui/core/colors";
import { fetchCurrentUserData } from "../helpers/fetchCurrentUserData";
import { reducer } from "../helpers/reducer";
import { useEffect, useReducer } from "react";
import { ACTIONS } from "../constants/ACTIONS";
import { generateGridData } from "../helpers/generateGridData";

const initialState = {
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
      isLoading: true,
      teams_current: [],
      teams_history: [],
      checked_in_team: {
        teamInfoData: {}
      }
    },
    gridData: [],
    teamsMatchesData: [],
    rankings: {
      teams: [],
      playerRankings: []
    },
    currentPlayArea: {
    },
    isLoading: true
  },
  teamData: {
    teamInfoData: {},
    teamMatchesData: {
      matches: []
    },
    teamCurrentRosterData: [],
    teamPastPlayersData: [],
  }
}

const useUserData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // assume default user for now
    const updateInitialState = async () => {
      const userData = await fetchCurrentUserData(3);
      // const gridData = generateGridData(userData.teamsData.teams_current);
      dispatch({ type: ACTIONS.UPDATE_USER_DATA, data: userData });
      dispatch({ type: ACTIONS.UPDATE_TEAMWIDGET_LOADING_STATUS, data: false});
    }
    updateInitialState();
  }, [])

  // return state and dispatch
  return {
    state,
    dispatch
  }
}





export { initialState, useUserData }