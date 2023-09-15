import { Box, Typography, IconButton, Button, Avatar } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { HorDivider } from "../../../DS/Divider/Divider";
import Confirmation from "./Confirmation/Confirmation";
import { useState } from "react";
import { SharesData } from "./data";

const Shares = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box width={"100%"}>
      <Typography
        color={"white"}
        fontWeight={"bold"}
        display={"flex"}
        alignItems={"center"}
        height={"36px"}
        marginBottom={2}
      >
        Aquired Shares
        <IconButton size="large">
          <ShowChartIcon sx={{ color: "white" }} />
        </IconButton>
      </Typography>
      <Box display={"flex"} gap={1} flexDirection={"column"}>
        {SharesData.map((item, index) => (
          <>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              paddingRight={3}
            >
              <Box display={"flex"} gap={3}>
                <Avatar src={item.src} variant="rounded" />
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography fontWeight={"bold"} color={"white"}>
                    {item.name}
                  </Typography>
                  <Typography variant="overline" color={"white"}>
                    amount = {item.amount}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color={"info"}
                size="small"
                sx={{ height: "40px" }}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Sell
              </Button>
            </Box>
            {index != SharesData.length - 1 && <HorDivider />}
          </>
        ))}
      </Box>
      <Confirmation open={openModal} setOpen={setOpenModal} />
    </Box>
  );
};

export default Shares;
