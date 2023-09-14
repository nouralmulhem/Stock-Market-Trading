import { ButtonsContainer } from "./styles";
import { Button } from "@mui/material";

type TwoButtonsProps = {
  mainTxt: string;
  subTxt: string;
  mainColor: "primary" | "secondary" | "info";
  subColor: "primary" | "secondary" | "info";
  mainVariant: "contained" | "outlined";
  subVariant: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  mainAction?: () => void;
  subAction?: () => void;
};

const TwoButtons = (props: TwoButtonsProps) => {
  const {
    mainTxt,
    subTxt,
    mainColor,
    subColor,
    mainVariant,
    subVariant,
    size,
    mainAction,
    subAction,
  } = props;

  return (
    <ButtonsContainer>
      <Button
        color={mainColor}
        variant={mainVariant}
        size={size}
        onClick={mainAction}
      >
        {mainTxt}
      </Button>
      <Button
        color={subColor}
        variant={subVariant}
        size={size}
        onClick={subAction}
      >
        {subTxt}
      </Button>
    </ButtonsContainer>
  );
};

export default TwoButtons;
