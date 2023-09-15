import { Typography } from "@mui/material";
import { FooterPaper } from "./styles";

const Footer = () => {
  return (
    <FooterPaper elevation={4}>
      <Typography color={"white"}>Copy Rights</Typography>
      <Typography color={"grey"}>Looking forward to joining ^^</Typography>
    </FooterPaper>
  );
};

export default Footer;
