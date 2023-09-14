import { DsChildPaper, DsPaper } from "./styles";
import { IconButton, Typography } from "@mui/material";

type FormProps = {
  children: React.ReactNode;
  icons?: React.ReactNode;
  headerIcon?: React.ReactNode;
  page: string | undefined;
  position?: "relative" | "absolute";
  paddingTop?: number;
  top?: number;
};

const FormModal = (props: FormProps) => {
  const { children, page, icons, headerIcon, paddingTop, top, position } =
    props;

  return (
    <DsPaper elevation={3} paddingTop={paddingTop}>
      <DsChildPaper elevation={3} top={top} position={position}>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <IconButton>{headerIcon}</IconButton>
          {page}
        </Typography>
        {icons}
      </DsChildPaper>
      {children}
    </DsPaper>
  );
};

export default FormModal;
