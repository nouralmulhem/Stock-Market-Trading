import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoardHeader = styled(Paper)(({ theme }) => ({
  height: "70px",
  top: "30px",
  paddingLeft: 30,
  paddingRight: 30,
  color: "#fff",
  marginTop: 30,
  marginBottom: 30,
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
