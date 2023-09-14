import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type InputProps = {
  color?: string;
};

export const LadnginContainer = styled(Box)(({ theme }) => ({
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  width: "60%",
  margin: "auto",
  textAlign: "center",
  color: "#fff",
}));

export const LandingTypography = styled(Typography)<InputProps>(
  ({ color }) => ({
    color,
    display: "inline",
  })
);
