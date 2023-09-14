import { Button, Typography } from "@mui/material";
import {
  ButtonsContainer,
  LadnginContainer,
  LandingTypography,
} from "./styles";

const Content = () => {
  return (
    <LadnginContainer>
      <LandingTypography variant="h2" fontWeight="bold">
        Welcome! to the biggest{" "}
        <LandingTypography variant="h2" fontWeight="bold" color={"#1052c1"}>
          Stock Market Trading Platform
        </LandingTypography>
      </LandingTypography>
      <LandingTypography variant="h5">
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </LandingTypography>
      <ButtonsContainer>
        <Button color="primary" variant="contained" size="large">
          Start free trial
        </Button>
        <Button color="secondary" variant="contained" size="large">
          Learn more
        </Button>
      </ButtonsContainer>
    </LadnginContainer>
  );
};

export default Content;
