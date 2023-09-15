import { useState } from "react";
import { BootstrapDialog } from "./styles";
import { Box, Typography } from "@mui/material";
import { useCurrentUser } from "../../../../contexts/useCurrentUser";
import EuroIcon from "@mui/icons-material/Euro";

// DS components
import Notification from "../../../../DS/Notification/Notification";
import FormModal from "../../../../DS/FormModal/FormModal";
import TwoButtons from "../../../../DS/TwoButtons/TwoButtons";
import InputField from "../../../../DS/WhiteInput/InputField";

type DepositeProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Deposite = (props: DepositeProps) => {
  const { open, setOpen } = props;
  const { currentUser } = useCurrentUser();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const handleSubmit = () => {
    if (amount) {
      setOpenSuccess(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else {
      setOpenFail(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BootstrapDialog onClose={handleClose} open={open}>
      <FormModal
        page="Deposite to your account"
        headerIcon={<EuroIcon sx={{ color: "white" }} />}
      >
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          width={"100%"}
          marginBottom={2}
        >
          <Typography>Your Current amount:</Typography>
          <Typography>{currentUser?.money}</Typography>
        </Box>
        <InputField
          required
          type="number"
          color="info"
          variant="outlined"
          label="amount to deposite"
          fullWidth
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />
        <Box sx={{ marginTop: 4 }}>
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
      />
      <Notification
        open={openFail}
        setOpen={setOpenFail}
        msg={"Empty Field"}
        type={"error"}
      />
    </BootstrapDialog>
  );
};

export default Deposite;
