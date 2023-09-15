import { useState } from "react";

import { BootstrapDialog } from "./styles";
import { Box, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

// DS
import Notification from "../../../../DS/Notification/Notification";
import FormModal from "../../../../DS/FormModal/FormModal";
import TwoButtons from "../../../../DS/TwoButtons/TwoButtons";

type ConfirmationProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Confirmation = (props: ConfirmationProps) => {
  const { open, setOpen } = props;
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleSubmit = () => {
    setOpenSuccess(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BootstrapDialog onClose={handleClose} open={open}>
      <FormModal
        page="Sell Shares"
        headerIcon={<EuroIcon sx={{ color: "white" }} />}
      >
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          width={"100%"}
          marginBottom={2}
        >
          <Typography variant="h5">
            are you sure you wanted to sell this share?
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <TwoButtons
            mainTxt="Submit"
            subTxt="Discard"
            mainColor="primary"
            subColor="info"
            mainVariant="contained"
            subVariant="contained"
            mainAction={handleSubmit}
            subAction={handleClose}
          />
        </Box>
      </FormModal>
      <Notification
        open={openSuccess}
        setOpen={setOpenSuccess}
        msg={"wohooo money will be added to your account once i have a backend"}
        type={"success"}
        duration={3000}
      />
    </BootstrapDialog>
  );
};

export default Confirmation;
