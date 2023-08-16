
import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';

export default function ScanGenerateForQR(props) {
  const { setScanOrGenerate } = props
  const theme = useTheme();

  return (
    <Stack direction="column" spacing={2}>
      <Stack spacing={2}>
        <Button variant="contained" size="large" onClick={() => setScanOrGenerate('Scan')} style={{ color: "#F5F5F5" }}>
          <Typography variant='h4'><CropFreeRoundedIcon fontSize="medium" />&nbsp;Scan</Typography>
        </Button>
        <Button variant="contained" onClick={() => setScanOrGenerate('Generate')} style={{ color: "#F5F5F5" }}>
          <Typography variant='h4'><QrCodeRoundedIcon fontSize="medium" />&nbsp;Generate</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}