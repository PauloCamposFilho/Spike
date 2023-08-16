import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack } from '@mui/material';
import BasicSelect from './NewMatch';
import NewMatch from './NewMatch';
import { UserContext } from '../contexts/UserContext';
import { useNewMatch } from '../hooks/useNewMatch';
import { NewMatchContext } from '../contexts/NewMatchContext';
import { NEW_MATCH_ACTIONS } from '../constants/NEW_MATCH_ACTIONS';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import TestScanner from './QRSCanner';
import WinLossForQR from './WinLossForQR';
import { useContext, useState } from 'react';
import ScanGenerateForQR from './ScanGenerateForQR';
import { QRCodeGenerator } from './QRcode';

export default function PlusButtonModal(props) {
  const { open, onClose } = props
  const { state } = useContext(UserContext)
  const { newMatchState, dispatch } = useNewMatch();
  const [scanOrGenerate, setScanOrGenerate] = useState('')

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

  const setModalTypeToMatch = (type) => {
    return dispatch({ type: NEW_MATCH_ACTIONS.SET_MODAL_TYPE, data: type })
  }

  const resetMatchState = () => {
    onClose()
    return dispatch({ type: NEW_MATCH_ACTIONS.RESET_SELECT_STATE })
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      {!newMatchState.modalType &&
        <>
          <DialogTitle>
            <Typography variant='h5' style={{ textAlign: "center" }}>
              How would you like to record a match?
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Box width={400} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Stack spacing={2}>
                <Button variant="contained" size="large" onClick={() => setModalTypeToMatch('Manual')} style={{ color: "#F5F5F5" }}>
                  <Typography variant='h4'><CreateRoundedIcon fontSize="medium" />&nbsp;Manual</Typography>
                </Button>
                <Button variant="contained" onClick={() => setModalTypeToMatch('Scan')} style={{ color: "#F5F5F5" }}>
                  <Typography variant='h4'><QrCodeScannerRoundedIcon fontSize="medium" />&nbsp;QR Code</Typography>
                </Button>
              </Stack>
            </Box>
          </DialogContent>
        </>}
      {newMatchState.modalType === 'Manual' &&
        <NewMatchContext.Provider value={{ newMatchState, dispatch, makeSelection, resetMatchState }}>
          <NewMatch />
        </NewMatchContext.Provider>}
      {newMatchState.modalType === 'Scan' &&
        <NewMatchContext.Provider value={{ newMatchState, dispatch, makeSelection, resetMatchState }}>
          {!scanOrGenerate ?
            <>
              <DialogTitle>
                <Typography variant="h4" style={{ textAlign: "center" }}>Would you like to scan or generate?</Typography>
              </DialogTitle>
              <DialogContent>
                <Box width={400} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <ScanGenerateForQR
                    setScanOrGenerate={setScanOrGenerate}
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => {
                    resetMatchState();
                    setScanOrGenerate('');
                  }}>
                  Cancel
                </Button>
              </DialogActions>

            </>
            : scanOrGenerate === 'Generate' ?
              !newMatchState.resultSelection ?
                <>
                  <DialogTitle>
                    <Typography variant="h4" style={{ textAlign: "center" }}>Record your result</Typography>
                  </DialogTitle>
                  <DialogContent>
                    <Box width={400} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <WinLossForQR />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        resetMatchState();
                        setScanOrGenerate('');
                      }}>
                      Cancel
                    </Button>
                  </DialogActions>
                </>
                :
                <>
                  <DialogTitle>
                    <Typography variant="h4" style={{ textAlign: "center" }}>QR Code</Typography>
                  </DialogTitle>
                  <DialogContent>
                    <Box width={400} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <QRCodeGenerator
                        homeTeamId={state.userData.teamsData.checked_in_team.teamInfoData.id}
                        playAreaId={state.userData.currentPlayArea.id}
                        result={newMatchState.resultSelection}
                      />
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        resetMatchState();
                        setScanOrGenerate('');
                      }}>
                      Cancel
                    </Button>
                  </DialogActions>
                </>
              :
              <>
                <Grid container style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2%" }}>
                  <Grid item>
                    <Typography variant="h4">Scan your code!</Typography>
                  </Grid>
                  <TestScanner />
                </Grid>
              </>}
        </NewMatchContext.Provider>}
    </Dialog >
  )
}