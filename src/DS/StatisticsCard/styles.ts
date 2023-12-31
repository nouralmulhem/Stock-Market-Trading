import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

type DsIconCardProps = {
  bgcolor?: string;
};

export const DsCard = styled(Paper)(({ theme }) => ({
  width: "20%",
  minHeight: 20,
  backgroundColor: theme.palette.secondary.main,
  padding: 20,
  borderRadius: 10,
}));

export const DsIconCard = styled(Paper)<DsIconCardProps>(
  ({ theme, bgcolor }) => ({
    background: bgcolor,
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "-30px",
    borderRadius: 10,
  })
);
