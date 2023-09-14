import { FormControl, FormGroup, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthInput } from "../styles";
import { useCallback, useState } from "react";
import Notification from "../Notification/Notification";

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
          <AuthInput required color="info" label="Name" variant="outlined" />
          <AuthInput
            required
            color="info"
            label="ُEmail"
            type="email"
            variant="outlined"
          />
          <AuthInput
            required
            color="info"
            label="Password"
            type="password"
            variant="outlined"
          />
          {/* <FormControlLabel
            control={
              <Checkbox
                checked={state}
                onChange={() => {
                  setState((prev) => !prev);
                }}
              />
            }
            label={`I agree to the ${(<Link>Terms and Conditions</Link>)}`}
          /> */}
          <Button color="info" variant="contained" onClick={handleSubmit}>
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
        msg={"whohoo successfully submitted"}
      />
    </>
  );
};

export default SignUp;
