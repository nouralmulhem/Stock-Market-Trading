import { useState } from "react";
import { BootstrapDialog } from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Typography } from "@mui/material";
import { useCurrentUser } from "../../../contexts/useCurrentUser";

// DS components
import Notification from "../../../DS/Notification/Notification";
import FormModal from "../../../DS/FormModal/FormModal";
import TwoButtons from "../../../DS/TwoButtons/TwoButtons";
import InputField from "../../../DS/WhiteInput/InputField";

type BuyModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const BuyModal = (props: BuyModalProps) => {
  const { open, setOpen } = props;
  const { currentUser } = useCurrentUser();
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const handleSubmit = () => {
    if (currentUser?.money && amount && amount < currentUser?.money) {
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
        page="Purchase"
        headerIcon={<ShoppingCartIcon sx={{ color: "white" }} />}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          marginBottom={2}
        >
          <Typography>Your Current Acount has:</Typography>
          <Typography>{currentUser?.money} $</Typography>
        </Box>
        <InputField
          type="number"
          color="info"
          variant="outlined"
          label="amount to purchase"
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
        msg={"wohooo your share is ready"}
        type={"success"}
        duration={3000}
      />
      <Notification
        open={openFail}
        setOpen={setOpenFail}
        msg={"Error Can't buy more than you have"}
        type={"error"}
        duration={3000}
      />
    </BootstrapDialog>
  );
};

export default BuyModal;
