import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  Button,
} from "@mui/material";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo } from "./server";
import { useCookies } from "react-cookie";

// DS
import Notification from "../../../../DS/Notification/Notification";
import InputField from "../../../../DS/WhiteInput/InputField";

// contexts
import { user } from "../../../../contexts/useCurrentUser";

const SignIn = () => {
  const [state, setState] = useState(false);
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [cookies, setCookie] = useCookies(["user"]);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    if (username && password) {
      const userInfo = getUserInfo<user>(username);
      userInfo
        .then((res) => {
          setOpenSuccess(true);
          setCookie("user", res, { path: "/" });
          setTimeout(() => {
            navigate("/dashboard/dashboard");
          }, 1000);
        })
        .catch((error) => {
          setOpenFail(true);
        });
    } else setOpenFail(true);
  }, [username, password]);

  return (
    <>
      <FormControl
        component="fieldset"
        variant="standard"
        sx={{ width: "90%", flexGrow: 1 }}
      >
        <FormGroup sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <InputField
            required
            color="info"
            label="username"
            variant="outlined"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputField
            required
            color="info"
            label="password"
            type="password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
          <Button
            type="submit"
            color="info"
            variant="contained"
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </FormGroup>
      </FormControl>
      <Typography>
        Don&apos;t have an account?{" "}
        <Link to={"/authentication/signup"}>Sign up</Link>
      </Typography>
      <Notification
        open={openSuccess}
        setOpen={setOpenSuccess}
        msg={"welcome back ^^"}
        type={"success"}
        duration={1000}
      />
      <Notification
        open={openFail}
        setOpen={setOpenFail}
        msg={"Something Went Wrong !"}
        type={"error"}
        duration={3000}
      />
    </>
  );
};

export default SignIn;
