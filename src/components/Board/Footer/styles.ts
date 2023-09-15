import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 30,
  marginTop: 30,
  padding: "10px 30px",
  backgroundColor: "transparent",
}));
