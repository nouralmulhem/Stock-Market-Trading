import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BackgroundPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  minHeight: "18.75rem",
  width: "100%",
  opacity: 1,
  color: " rgb(52, 71, 103)",
  boxShadow: "none",
  background:
    "linear-gradient(195deg, rgba(73, 163, 241, 0.6), rgba(26, 115, 232, 0.6)) 50% center / cover, url(/bg2.jpeg) transparent",
  borderRadius: "0.75rem",
  backgroundPosition: "50% center",
  overflow: "hidden",
}));

export const ContectPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  padding: 30,
  gap: 30,
  top: "-100px",
  width: "85%",
  borderRadius: "0.75rem",
  backgroundColor: theme.palette.secondary.main,
  overflow: "hidden",
}));
