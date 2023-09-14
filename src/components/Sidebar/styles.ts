import { List, ListItem, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

interface DsListItemProps {
  disablePadding?: boolean;
  contained?: string;
}

export const Container = styled(Paper)(({ theme }) => ({
  height: "calc(100vh - 90px)",
  minWidth: "15%",
  margin: 30,
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  display: "flex",
  flexDirection: "column",
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 15,
  paddingRight: 15,
}));

export const DsList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
}));

export const DsListItem = styled(ListItem)<DsListItemProps>(
  ({ theme, contained }) => ({
    borderRadius: 10,
    backgroundColor:
      contained === "true" ? theme.palette.info.main : "transparent",
  })
);
