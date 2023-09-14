import { Box, Typography, IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { HorDivider } from "../../../../DS/Divider/Divider";

const contentColor: string = "#cacaca";

const Informations = () => {
  return (
    <Box width={"50%"} padding={2}>
      <Typography
        color={"white"}
        fontWeight={"bold"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={2}
      >
        Profile Information
        <IconButton>
          <CreateIcon sx={{ color: "grey" }} fontSize="small" />
        </IconButton>
      </Typography>
      <Typography color={contentColor} variant={"subtitle1"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur,
        explicabo laborum? Beatae nam nisi quasi. Odit itaque{" "}
      </Typography>
      <HorDivider />
      <Box>
        <Typography color={"white"} fontWeight={"bold"} variant={"overline"}>
          Full Name: <span style={{ color: contentColor }}>Nour Ziad</span>
        </Typography>
        <br />
        <Typography color={"white"} fontWeight={"bold"} variant={"overline"}>
          Rmail: <span style={{ color: contentColor }}>nourml@gmail.com</span>
        </Typography>
        <br />
        <Typography color={"white"} fontWeight={"bold"} variant={"overline"}>
          Money:
          <span style={{ color: contentColor }}>1000</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Informations;
