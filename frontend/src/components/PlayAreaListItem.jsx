import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Stack, Avatar, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import "../style/Playarea.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import '../style/PlayAreaListItem.scss'
export default function PlayAreaListItem(props) {
  const { id, image, name, description, courtsNumber, latitude, longitude } = props;
  const { state, updateCurrentPlayArea } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const { currentPlayArea } = state.userData;

  const checkInHandler = () => {
    console.log("Loader ON");
    setLoading(true);
    setTimeout(() => {
      updateCurrentPlayArea(id);
      setLoading(false);
      console.log("Loader OFF");
    }, 800)
  };

  console.log("userData OBJ:", state.userData);


  return (
    <TableRow
      className="table-row"
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={image} />
        </Stack>
      </TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{description}</TableCell>
      <TableCell align="left">{courtsNumber}</TableCell>
      <TableCell align="left">
        <Button variant="contained" component={Link} to={`/playarea/${id}`} style={{fontFamily: "Fredoka", color:"#FAFAFA"}}>Details</Button>
        {currentPlayArea.id !== id &&
          <Button variant="contained" style={{ marginLeft: "10px" }} onClick={checkInHandler}>Check-in</Button>
        }
        {currentPlayArea.id === id &&
          <span style={{ color: "green", fontWeight: "bold", marginLeft: "50px" }}>✔</span>
        }
        {isLoading && <CircularProgress />}
      </TableCell>
      {/* <TableCell align="left">{latitude}</TableCell>
      <TableCell align="left">{longitude}</TableCell> */}
    </TableRow>
  );
}
