import InvestorsTable from "./InvestorsTable";

// icons
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

// DS
import Table from "../../../DS/Table/Table";

const Header = () => {
  return (
    <>
      <PeopleAltIcon />
      Investors and Transactions
    </>
  );
};

const Investors = () => {
  return (
    <Table header={<Header />}>
      <InvestorsTable />
    </Table>
  );
};

export default Investors;
