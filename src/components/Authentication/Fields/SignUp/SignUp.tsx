import { FormControl, FormGroup, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import Notification from "../../../../DS/Notification/Notification";
import InputField from "../../../../DS/WhiteInput/InputField";

const SignUp = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSubmit = useCallback(() => {
    setOpen(true);
    setTimeout(() => {
      navigate("/authentication/signin");
    }, 3000);
  }, []);

  return (
    <>
      <FormControl
        component="fieldset"
        variant="standard"
        sx={{ width: "90%", flexGrow: 1 }}
      >
        <FormGroup sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <InputField required color="info" label="Name" variant="outlined" />
          <InputField
            required
            color="info"
            label="ُEmail"
            type="email"
            variant="outlined"
          />
          <InputField
            required
            color="info"
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button
            type="submit"
            color="info"
            variant="contained"
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </FormGroup>
      </FormControl>
      <Typography>
        already have an account?{" "}
        <Link to={"/authentication/signin"}>Sign in</Link>
      </Typography>
      <Notification
        open={open}
        setOpen={setOpen}
        type={"success"}
        msg={"whohoo successfully submitted"}
        duration={3000}
      />
    </>
  );
};

export default SignUp;
