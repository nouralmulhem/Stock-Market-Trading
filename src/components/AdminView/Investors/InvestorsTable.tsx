import {
  Collapse,
  IconButton,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import { DsTable, DsTableCell } from "./styles";

//icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import Transactions from "../../InvestorView/Transactions/Transactions";

function createData(
  investorIcon: React.ReactNode,
  investorName: string,
  transiction: string,
  money: string,
  shares: string
) {
  return {
    investorIcon,
    investorName,
    transiction,
    money,
    shares,
  };
}

const InvestorsArray = [
  {
    investorIcon: <Avatar src="/nour.jpeg" variant="rounded" />,
    investorName: "Nour",
    transiction: "30 / 09 / 2023",
    money: "936000",
    shares: "23",
  },
  {
    investorIcon: <Avatar src="/eslam.jpg" variant="rounded" />,
    investorName: "Eslam",
    transiction: "08 / 11 / 2022",
    money: "65000",
    shares: "9",
  },
  {
    investorIcon: <Avatar src="/dad.jpg" variant="rounded" />,
    investorName: "Ziad",
    transiction: "07 / 10 / 2024",
    money: "936999000",
    shares: "12",
  },
];

function Row(props: {
  row: ReturnType<typeof createData>;
  setBuyModal: (open: boolean) => void;
}) {
  const { row, setBuyModal } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <DsTableCell>
          <IconButton
            sx={{ color: "white" }}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </DsTableCell>
        <DsTableCell
          component="th"
          scope="row"
          sx={{ display: "flex", alignItems: "center", gap: 2, height: "50px" }}
        >
          {row.investorIcon}
          {row.investorName}
        </DsTableCell>
        <DsTableCell>{row.transiction}</DsTableCell>
        <DsTableCell>{row.money}</DsTableCell>
        <DsTableCell>{row.shares}</DsTableCell>
      </TableRow>
      <TableRow>
        <DsTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Transactions />
          </Collapse>
        </DsTableCell>
      </TableRow>
    </>
  );
}

const InvestorsTable = () => {
  const [buyModal, setBuyModal] = useState(false);

  return (
    <>
      <TableContainer component={Paper} sx={{ backgroundColor: "unset" }}>
        <DsTable aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <DsTableCell />
              <DsTableCell sx={{ color: "white" }}>Investors</DsTableCell>
              <DsTableCell>Last Transactions</DsTableCell>
              <DsTableCell>Money</DsTableCell>
              <DsTableCell>Aquired Shares</DsTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {InvestorsArray.map((row) => (
              <Row key={row.investorName} row={row} setBuyModal={setBuyModal} />
            ))}
          </TableBody>
        </DsTable>
      </TableContainer>
    </>
  );
};

export default InvestorsTable;
