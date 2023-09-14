import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthPaper = styled(Paper)(({ theme }) => ({
  width: "30%",
  minHeight: "40%",
  margin: "auto",
  padding: 30,
  paddingTop: 120,
  top: "150px",
  position: "relative",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#1d2843",
}));

export const ChildPaper = styled(Paper)(({ theme }) => ({
  width: "75%",
  margin: "auto",
  padding: 30,
  top: "-70px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: "inherit",
  alignItems: "center",
  background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(18 79 159))",
}));
