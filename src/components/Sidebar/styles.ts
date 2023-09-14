import { Divider, List, ListItem, Paper } from "@mui/material";
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

export const DsDivider = styled(Divider)(({ theme }) => ({
  flexShrink: 0,
  borderTop: "0px solid rgba(0, 0, 0, 0.12)",
  borderRight: "0px solid rgba(0, 0, 0, 0.12)",
  borderLeft: "0px solid rgba(0, 0, 0, 0.12)",
  backgroundColor: "transparent",
  height: "0.0625rem",
  margin: "1rem 0px",
  borderBottom: "none",
  opacity: 0.25,
  backgroundImage:
    "linear-gradient(to right, rgba(52, 71, 103, 0), rgb(255, 255, 255), rgba(52, 71, 103, 0)) !important",
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
