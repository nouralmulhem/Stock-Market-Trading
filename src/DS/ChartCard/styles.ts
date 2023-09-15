import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

type DsIconCardProps = {
  bgcolor?: string;
};

export const DsCard = styled(Paper)(({ theme }) => ({
  width: "50%",
  minHeight: 20,
  backgroundColor: theme.palette.secondary.main,
  padding: 20,
  borderRadius: 10,
}));

export const DsChartCard = styled(Paper)<DsIconCardProps>(
  ({ theme, bgcolor }) => ({
    background: bgcolor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "-50px",
    paddingTop: "-80px",
    borderRadius: 10,
  })
);
