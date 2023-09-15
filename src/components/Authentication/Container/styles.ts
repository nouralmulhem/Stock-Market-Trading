import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthContainer = styled(Box)(() => ({
  height: "100vh",
  boxShadow: "none",
  background:
    "linear-gradient(195deg, rgba(50, 58, 84, 0.6), rgba(26, 32, 53, 0.6)) center center / cover no-repeat, url(/public/bg.jpeg) transparent",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));
