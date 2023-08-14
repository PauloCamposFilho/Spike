import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";

export default function PlusButton (props) {
  const { handleOpen } = props

  return (
    <Button variant="contained" onClick={handleOpen}>
      <AddIcon /> 
    </Button>
  )
}