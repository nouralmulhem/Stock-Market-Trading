import { Typography } from "@mui/material";
import { FooterPaper } from "./styles";

// colors
import { contentColor } from "../../../styles/colors";

const Footer = () => {
  return (
    <FooterPaper elevation={4}>
      <Typography color={contentColor} display={"flex"} gap={1}>
        © 2023, made by
        <Typography color={"white"}> Nour Ziad Almulhem</Typography>
      </Typography>
      <Typography color={contentColor}>
        Looking forward to joining ^^
      </Typography>
    </FooterPaper>
  );
};

export default Footer;
