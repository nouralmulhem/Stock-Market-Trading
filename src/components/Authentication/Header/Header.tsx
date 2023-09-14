import { Box, Button, Icon, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { AuthHeader, AuthHeaderBtn } from "./styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";

const Header = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AuthHeader>
      <Typography>Stock Market Login</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <AuthHeaderBtn startIcon={<DashboardIcon sx={{ color: "#7b809a" }} />}>
          Dashboard
        </AuthHeaderBtn>
        <AuthHeaderBtn startIcon={<PersonIcon sx={{ color: "#7b809a" }} />}>
          Profile
        </AuthHeaderBtn>
        <AuthHeaderBtn
          href="/authentication/signup"
          startIcon={<AccountCircleIcon sx={{ color: "#7b809a" }} />}
        >
          Sign up
        </AuthHeaderBtn>
        <AuthHeaderBtn
          href="/authentication/signin"
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
