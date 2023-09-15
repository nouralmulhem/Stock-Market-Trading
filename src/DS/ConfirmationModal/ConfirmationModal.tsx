import { useState } from "react";
import { Box, Typography, Dialog } from "@mui/material";

// DS
import Notification from "../Notification/Notification";
import FormModal from "../FormModal/FormModal";
import TwoButtons from "../TwoButtons/TwoButtons";

type ConfirmationProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  msg: string;
  title: string;
  icon: JSX.Element;
};

const ConfirmationModal = (props: ConfirmationProps) => {
  const { open, setOpen, msg, title, icon } = props;
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
    <Dialog onClose={handleClose} open={open}>
      <FormModal page={title} headerIcon={icon}>
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          width={"100%"}
          marginBottom={2}
        >
          <Typography variant="h5">{msg}</Typography>
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
    </Dialog>
  );
};

export default ConfirmationModal;
