import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import BasicSelect from './NewMatch';
import NewMatch from './NewMatch';
import { UserContext } from '../contexts/UserContext';
import { useNewMatch } from '../hooks/useNewMatch';
import { NewMatchContext } from '../contexts/NewMatchContext';
import { NEW_MATCH_ACTIONS } from '../constants/NEW_MATCH_ACTIONS';

export default function PlusButtonModal(props) {
  const { open, onClose } = props

  const { newMatchState, dispatch } = useNewMatch();

  const makeSelection = (selectionType, selection) => {
    switch (selectionType) {
      case "Home Team":
        return dispatch({ type: NEW_MATCH_ACTIONS.SELECT_HOME_TEAM, data: selection });
      case "Away Team":
        return dispatch({ type: NEW_MATCH_ACTIONS.SELECT_AWAY_TEAM, data: selection });
      case "Result":
        return dispatch({ type: NEW_MATCH_ACTIONS.SELECT_RESULT, data: selection });
      case "Court":
        return dispatch({ type: NEW_MATCH_ACTIONS.SELECT_COURT, data: selection });
      default:
        return;
    }
  }

  const setModalTypeToMatch = () => {
    return dispatch({ type: NEW_MATCH_ACTIONS.SET_MODAL_TYPE, data: 'Match'})
  }

  const resetMatchState = () => {
    onClose()
    return dispatch({ type: NEW_MATCH_ACTIONS.RESET_SELECT_STATE })
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      {!newMatchState.modalType &&
          <>
            <DialogTitle>What would you like to make?</DialogTitle>
            <DialogContent>
              <Box width={400}>
                <Stack spacing={2}>
                  <Button variant="contained" size="large" onClick={setModalTypeToMatch}>New Match</Button>
                  <Button variant="contained" size="large">Create Team</Button>
                </Stack>
                </Box>
              </DialogContent>
          </>}
      {newMatchState.modalType === 'Match' &&
        <NewMatchContext.Provider value={{ newMatchState, dispatch, makeSelection, resetMatchState }}>
          <NewMatch />
        </NewMatchContext.Provider>}
    </Dialog>
  )
}