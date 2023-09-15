import { LadnginContainer, LandingTypography } from "./styles";

// DS
import TwoButtons from "../../../DS/TwoButtons/TwoButtons";

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

      <TwoButtons
        mainTxt="Start free trial"
        subTxt="Learn more"
        mainColor="primary"
        subColor="secondary"
        mainVariant="contained"
        subVariant="contained"
        size="large"
      />
    </LadnginContainer>
  );
};

export default Content;
