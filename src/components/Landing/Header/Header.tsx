import { Box, Button, Toolbar, Typography } from "@mui/material";
import { DsAppBar } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#000000de" }}>
      <DsAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stock Market Trading
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              color="inherit"
              size="small"
              component={Link}
              to="/authentication/signin"
            >
              sign in
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              component={Link}
              to="/authentication/signun"
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </DsAppBar>
    </Box>
  );
};

export default Header;
