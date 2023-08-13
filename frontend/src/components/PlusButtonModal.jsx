import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import BasicSelect from './NewMatch';
import NewMatch from './NewMatch';

export default function PlusButtonModal(props) {
  const { chooseNewMatchModal, modalType, open, onClose } = props
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {!modalType && 
        <DialogTitle>What would you like to make?</DialogTitle>}
      {modalType === 'Match' && 
        <DialogTitle>Log Match Result</DialogTitle>}
      <DialogContent>
        <Box width={400} component={"form"}>
          {!modalType &&
            <Stack spacing={2}>
              <Button variant="contained" size="large" onClick={chooseNewMatchModal}>New Match</Button>
              <Button variant="contained" size="large">Create Team</Button>
            </Stack>}
          {modalType === 'Match' &&
            <NewMatch />
          }
        </Box>
      </DialogContent>
      {modalType === 'Match' &&
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Ok</Button>
      </DialogActions>}

    </Dialog>
  )
}