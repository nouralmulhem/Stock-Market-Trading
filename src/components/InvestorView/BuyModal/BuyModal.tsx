import FormModal from "../../../DS/FormModal/FormModal";
import Typography from "@mui/material/Typography";
import { BootstrapDialog } from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { TextField } from "@mui/material";

type BuyModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const BuyModal = (props: BuyModalProps) => {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  console.log(open);

  return (
    <BootstrapDialog onClose={handleClose} open={open}>
      <FormModal
        page="Purchase"
        headerIcon={<ShoppingCartIcon sx={{ color: "white" }} />}
      ></FormModal>
    </BootstrapDialog>
  );
};

export default BuyModal;
