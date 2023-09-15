import { StocksTable } from "../StocksTable/StocksTable";

// DS
import Table from "../../../DS/Table/Table";

// icons
import ApartmentIcon from "@mui/icons-material/Apartment";

const Header = () => {
  return (
    <>
      <ApartmentIcon />
      Companies and Stocks
    </>
  );
};

const Stocks = () => {
  return (
    <>
      <Table header={<Header />}>
        <StocksTable />
      </Table>
    </>
  );
};

export default Stocks;
