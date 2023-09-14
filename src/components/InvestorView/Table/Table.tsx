import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DsTable, DsTableCell } from "./styles";

//icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import DsPlot from "./DsPlot/DsPlot";
import BuyModal from "../BuyModal/BuyModal";

function createData(
  symbol: string,
  lastRefreshed: string,
  output: string,
  time: string
) {
  return {
    symbol,
    lastRefreshed,
    output,
    time,
  };
}

const rows = [
  createData("IBM", "2023-09-13", "Compact", "US/Eastern"),
  createData("FB", "2023-09-14", "Compact", "US/Eastern"),
  createData("MSFT", "2023-09-9", "Compact", "US/Eastern"),
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
        <DsTableCell component="th" scope="row">
          {row.symbol}
        </DsTableCell>
        <DsTableCell>{row.lastRefreshed}</DsTableCell>
        <DsTableCell>{row.output}</DsTableCell>
        <DsTableCell>{row.time}</DsTableCell>
      </TableRow>
      <TableRow>
        <DsTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <DsPlot setBuyModal={setBuyModal} />
          </Collapse>
        </DsTableCell>
      </TableRow>
    </>
  );
}

export default function Table() {
  const [buyModal, setBuyModal] = useState(false);

  return (
    <>
      <TableContainer component={Paper} sx={{ backgroundColor: "unset" }}>
        <DsTable aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <DsTableCell />
              <DsTableCell sx={{ color: "white" }}>Symbol</DsTableCell>
              <DsTableCell>Last Refreshed</DsTableCell>
              <DsTableCell>Output Size</DsTableCell>
              <DsTableCell>Time Zone</DsTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.symbol} row={row} setBuyModal={setBuyModal} />
            ))}
          </TableBody>
        </DsTable>
      </TableContainer>
      <BuyModal open={buyModal} setOpen={setBuyModal} />
    </>
  );
}
