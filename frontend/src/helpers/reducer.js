import { ACTIONS } from "../hooks/useUserData";

const { SET_CURRENT_PLAY_AREA, OPEN_QR, CLOSE_MODAL, UPDATE_USER_DATA } = ACTIONS;

const reducer = (state, action) => {
  switch (action.type) {
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
          qrDetails: action.data
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

    // Return current state if action type unrecognized
    default: 
      return state
  }
}

export { reducer }