import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function PlusButton (props) {
  const { handleOpen } = props
  const theme = useTheme();

  return (
    <Button 
    style={{
      borderRadius: '100%',
      height: '64px',
      width: '64px',
      color: '#FFF',
      background: `linear-gradient(to right, ${theme.palette.secondary.light},${theme.palette.primary.main})`
    }}
    variant="contained" onClick={handleOpen}>
      <AddIcon /> 
    </Button>
  )
}