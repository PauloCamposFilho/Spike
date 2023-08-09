const setPlayArea = (playAreaId) => {
  // Clear current play area in case of falsey input from toggle
  if (!playAreaId) {
    return dispatch({ type: ACTIONS.SET_CURRENT_PLAY_AREA, data: '' })
  }
  // Otherwise, set play area indo
  return dispatch({ type: ACTIONS.SET_CURRENT_PLAY_AREA, data: playAreaId})
};

const openQR = () => {

};

const closeModal = () => {
  return dispatch({ type: ACTIONS.CLOSE_MODAL })
};

export { setPlayArea, openQR, closeModal };