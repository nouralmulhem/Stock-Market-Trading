import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthHeader = styled(Paper)(({ theme }) => ({
  width: "70%",
  height: "7vh",
  margin: "auto",
  top: "30px",
  paddingLeft: 30,
  paddingRight: 30,
  color: "#fff",
  position: "relative",
  backgroundColor: "#1d2843",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AuthHeaderBtn = styled(Button)(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
}));
