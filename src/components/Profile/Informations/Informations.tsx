import { Box, Typography, IconButton } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

// DS
import { HorDivider } from "../../../DS/Divider/Divider";

// colors
import { contentColor } from "../../../styles/colors";

// contexts
import { useCurrentUser } from "../../../contexts/useCurrentUser";

const Informations = () => {
  const { currentUser } = useCurrentUser();

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
          <CreateIcon sx={{ color: contentColor }} fontSize="small" />
        </IconButton>
      </Typography>
      <Typography color={contentColor} variant={"subtitle1"}>
        {currentUser?.objective}{" "}
      </Typography>
      <HorDivider />
      <Box marginTop={3}>
        <Typography color={"white"} fontWeight={"bold"} variant={"subtitle2"}>
          Full Name:{" "}
          <span style={{ color: contentColor }}>{currentUser?.name}</span>
        </Typography>
        <br />
        <Typography color={"white"} fontWeight={"bold"} variant={"subtitle2"}>
          Email:{" "}
          <span style={{ color: contentColor }}>{currentUser?.email}</span>
        </Typography>
        <br />
        <Typography color={"white"} fontWeight={"bold"} variant={"subtitle2"}>
          Money:{" "}
          <span style={{ color: contentColor }}>{currentUser?.money}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Informations;
