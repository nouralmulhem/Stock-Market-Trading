import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DsAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  paddingRight: 30,
  paddingLeft: 30,
  height: 80,
  justifyContent: "center",
}));
