import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DsPaper = styled(Paper)(({ theme }) => ({
  width: "95%",
  padding: 30,
  paddingTop: 90,
  position: "relative",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
}));

export const DsChildPaper = styled(Paper)(({ theme }) => ({
  width: "87%",
  margin: "auto",
  padding: 15,
  paddingLeft: 40,
  top: "-10px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: "inherit",
  background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(18 79 159))",
}));
