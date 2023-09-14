import React, { Children } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { AuthPaper, ChildPaper } from "./styles";

type FormProps = {
  children: React.ReactNode;
  page: string | undefined;
};

const Form = (props: FormProps) => {
  const { children, page } = props;
  return (
    <AuthPaper elevation={3}>
      <ChildPaper elevation={3}>
        <Typography variant="h4" fontWeight={"bold"}>
          {page}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <GoogleIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
        </Box>
      </ChildPaper>
      {children}
    </AuthPaper>
  );
};

export default Form;
