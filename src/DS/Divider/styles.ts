import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DsHDivider = styled(Divider)(({ theme }) => ({
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

export const DsVDivider = styled(Divider)(({ theme }) => ({
  flexShrink: 0,
  borderTop: "0px solid rgba(0, 0, 0, 0.12)",
  borderBottom: "0px solid rgba(0, 0, 0, 0.12)",
  borderLeft: "0px solid rgba(0, 0, 0, 0.12)",
  backgroundColor: "transparent",
  width: "0.0625rem",
  margin: "0px 8px 0px -16px",
  height: "100%",
  borderRight: "none",
  opacity: 0.25,
  backgroundImage:
    "linear-gradient(rgba(52, 71, 103, 0), rgb(255, 255, 255), rgba(52, 71, 103, 0)) !important",
}));
