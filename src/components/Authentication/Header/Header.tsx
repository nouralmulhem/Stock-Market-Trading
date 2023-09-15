import { Box, Button, Typography } from "@mui/material";
import { AuthHeader, AuthHeaderBtn } from "./styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AuthHeader>
      <Typography fontWeight={"bold"}>Stock Market Login</Typography>
      <Box display={"flex"} gap={1}>
        <AuthHeaderBtn
          component={Link}
          to={"/dashboard/dashboard"}
          startIcon={<DashboardIcon sx={{ color: "#7b809a" }} />}
        >
          Dashboard
        </AuthHeaderBtn>
        <AuthHeaderBtn startIcon={<PersonIcon sx={{ color: "#7b809a" }} />}>
          Profile
        </AuthHeaderBtn>
        <AuthHeaderBtn
          component={Link}
          to={"/authentication/signup"}
          startIcon={<AccountCircleIcon sx={{ color: "#7b809a" }} />}
        >
          Sign up
        </AuthHeaderBtn>
        <AuthHeaderBtn
          component={Link}
          to={"/authentication/signin"}
          startIcon={<KeyIcon sx={{ color: "#7b809a" }} />}
        >
          Sign in
        </AuthHeaderBtn>
      </Box>
      <Button>Welcome Back ^^</Button>
    </AuthHeader>
  );
};

export default Header;
