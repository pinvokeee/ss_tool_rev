import { AppBar, Box, Button, IconButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

export const AppHeader = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
            </Toolbar>
          </AppBar>
        </Box>
      );
}