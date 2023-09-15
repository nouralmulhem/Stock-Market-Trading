import { useState } from "react";
import { Avatar, Box, IconButton, Typography, Dialog } from "@mui/material";

// icons
import EuroIcon from "@mui/icons-material/Euro";
import CreateIcon from "@mui/icons-material/Create";

// contexts
import { useCurrentUser } from "../../../contexts/useCurrentUser";

// DS
import Notification from "../../../DS/Notification/Notification";
import FormModal from "../../../DS/FormModal/FormModal";
import TwoButtons from "../../../DS/TwoButtons/TwoButtons";
import InputField from "../../../DS/WhiteInput/InputField";

// colors
import { contentColor } from "../../../styles/colors";

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
    <Dialog onClose={handleClose} open={open}>
      <FormModal
        page="Deposite to your account"
        headerIcon={<EuroIcon sx={{ color: "white" }} />}
      >
        <Box
          display={"flex"}
          width={"100%"}
          marginBottom={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Avatar
              src={"/Stock-Market-Trading/visa.png"}
              alt="user"
              variant="rounded"
            />
            <Avatar
              src={"/Stock-Market-Trading/ms.png"}
              alt="user"
              variant="rounded"
            />
            <Typography marginLeft={2}>
              you card info: **** **** **** 1986
            </Typography>
          </Box>
          <IconButton>
            <CreateIcon sx={{ color: contentColor }} />
          </IconButton>
        </Box>
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
        duration={3000}
      />
      <Notification
        open={openFail}
        setOpen={setOpenFail}
        msg={"Empty Field"}
        type={"error"}
        duration={3000}
      />
    </Dialog>
  );
};

export default Deposite;
