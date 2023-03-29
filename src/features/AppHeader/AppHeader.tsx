import { useTheme } from "@emotion/react";
import { AppBar, Box, Button, IconButton, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const Bar = styled(AppBar)(({theme}) => 
(
  {
    backgroundColor: theme.palette.background.default,
  }
));

export const AppHeader = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Bar  color={"primary"} position="static">
            <Toolbar >
            </Toolbar>
          </Bar>
        </Box>
      );
}