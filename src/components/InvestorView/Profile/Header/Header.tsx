import { Avatar, Typography, Box, Button } from "@mui/material";
import { useCurrentUser } from "../../../../contexts/useCurrentUser";
import EuroIcon from "@mui/icons-material/Euro";
import Deposite from "../Deposite/Deposite";
import { useState } from "react";

const Header = () => {
  const { currentUser } = useCurrentUser();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Avatar
          // variant="rounded"
          sx={{ bgcolor: "#1976d2", width: 56, height: 56 }}
        >
          {currentUser?.name[0]}
        </Avatar>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography fontWeight={"bold"} variant="h5" color="white">
            {currentUser?.name}
          </Typography>
          <Typography fontWeight={"bold"} color="grey">
            {currentUser?.type}
          </Typography>
        </Box>
      </Box>
      <Button
        startIcon={<EuroIcon />}
        variant={"contained"}
        size="small"
        sx={{ height: "50px" }}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Deposite
      </Button>
      <Deposite open={openModal} setOpen={setOpenModal} />
    </Box>
  );
};

export default Header;
