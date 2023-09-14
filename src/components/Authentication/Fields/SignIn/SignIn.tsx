import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  Button,
} from "@mui/material";
import { useCallback, useState } from "react";
import { AuthInput } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo } from "./server";
import { useCookies } from "react-cookie";
import Notification from "../Notification/Notification";

export type user = {
  id: number;
  name: string;
  type: string;
  username: string;
};

const SignIn = () => {
  const [state, setState] = useState(false);
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [cookies, setCookie] = useCookies(["user"]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    const userInfo = getUserInfo<user>(username);
    userInfo.then((res) => setCookie("user", res, { path: "/" }));
    setOpen(true);
    setTimeout(() => {
      navigate("/dashboard");
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
          <AuthInput
            required
            color="info"
            label="username"
            variant="outlined"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <AuthInput
            required
            color="info"
            label="password"
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state}
                onChange={() => {
                  setState((prev) => !prev);
                }}
              />
            }
            label="Remmember me"
          />
          <Button color="info" variant="contained" onClick={handleSubmit}>
            Sign in
          </Button>
        </FormGroup>
      </FormControl>
      <Typography>
        Don&apos;t have an account?{" "}
        <Link to={"/authentication/signup"}>Sign up</Link>
      </Typography>
      <Notification open={open} setOpen={setOpen} msg={"welcome back ^^"} />
    </>
  );
};

export default SignIn;
