import { ACTIONS } from "../constants/ACTIONS";

const { SET_CURRENT_PLAY_AREA, OPEN_QR, CLOSE_MODAL, UPDATE_USER_DATA, UPDATE_TEAM_DATA, UPDATE_USER_PAGE_LOADING_STATUS, UPDATE_TEAMWIDGET_LOADING_STATUS } = ACTIONS;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TEAMWIDGET_LOADING_STATUS:
      const WidgetTeamLoadingState = {
        ...state,
        teamsData: { ...state.teamsData, isLoading: action.data }       
      }
      return WidgetTeamLoadingState;
    // Update Player Profile Page Loading state
    case UPDATE_USER_PAGE_LOADING_STATUS:
      const profilePageState = {
        ...state,
        userData: {...state.userData, isLoading: action.data}
      }
      return profilePageState;
    // Update a user's current play area
    case SET_CURRENT_PLAY_AREA:
      const currentPlayAreaAfterUpdate = {
        ... state,
        // data should be a play area id, or empty string if untoggling
        currentPlayArea: action.data
      };
      return currentPlayAreaAfterUpdate;

    // Open a QR modal
    case OPEN_QR:
      const newQR = {
        ... state,
        qrModal: {
          ... state.qrModal,
          isOpen: true,
          // data should be an appropriate label and a valid endpoint url
          // qrDetails: action.data
        }
      }
      return newQR

    // Close a QR modal
    case CLOSE_MODAL:
      const modalAfterClose = {
        ... state,
        qrModal: {
          ... state.qrModal,
          isOpen: false
        }
      }
      return modalAfterClose

    case UPDATE_USER_DATA:
      const userDataAfterUpdate = {
        ... state,
        userData: action.data
      }
      return userDataAfterUpdate;
    
    case UPDATE_TEAM_DATA:
      const teamDataAfterUpdate = {
        ... state,
        teamData: action.data
      };
      return teamDataAfterUpdate;

    // Return current state if action type unrecognized
    default: 
      return state
  }
}

export { reducer }