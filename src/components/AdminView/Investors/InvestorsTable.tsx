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
import { useState } from "react";
import { InvestorsArray } from "./data";
import Transactions from "../../InvestorView/Transactions/Transactions";

//icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  investorIcon: string,
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

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
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
          <Avatar src={row.investorIcon} variant="rounded" />
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
              <Row key={row.investorName} row={row} />
            ))}
          </TableBody>
        </DsTable>
      </TableContainer>
    </>
  );
};

export default InvestorsTable;
