import {
  Collapse,
  IconButton,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { DsTable, DsTableCell } from "./styles";
import { useState } from "react";
import { createData, rows } from "./data";
import BuyModal from "../BuyModal/BuyModal";

//icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// DS
import DsPlot from "./DsPlot/DsPlot";

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

export function StocksTable() {
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
