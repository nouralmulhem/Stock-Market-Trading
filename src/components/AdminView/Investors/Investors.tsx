import Table from "../../../DS/Table/Table";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InvestorsTable from "./InvestorsTable";

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
