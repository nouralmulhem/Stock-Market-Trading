import { useCallback } from "react";
import { Alert, AlertColor, Snackbar } from "@mui/material";

type NotificationProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  msg: string;
  type: AlertColor | undefined;
};

const Notification = (props: NotificationProps) => {
  const { open, setOpen, msg, type } = props;
  const handleClose = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    },
    []
  );

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
