import { Table, TableCell } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DsTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  borderRadius: 10,
  outline: "none",
}));

export const DsTableCell = styled(TableCell)(({ theme }) => ({
  color: "#fff",
}));
