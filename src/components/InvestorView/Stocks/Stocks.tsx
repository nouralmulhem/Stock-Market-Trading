import { DsPaper, DsChildPaper } from "./styles";
import Table from "../Table/Table";
import { Typography } from "@mui/material";

// icons
import ApartmentIcon from "@mui/icons-material/Apartment";

const Stocks = () => {
  return (
    <>
      <DsPaper elevation={3}>
        <DsChildPaper elevation={3}>
          <Typography
            variant="h5"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <ApartmentIcon />
            Companies and Stocks
          </Typography>
        </DsChildPaper>
        <Table />
      </DsPaper>
    </>
  );
};

export default Stocks;
