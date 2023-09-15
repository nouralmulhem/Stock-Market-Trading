import { Typography } from "@mui/material";
import { DsChildPaper, DsPaper } from "./styles";

type TableProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

const Table = (props: TableProps) => {
  const { children, header } = props;
  return (
    <>
      <DsPaper elevation={3}>
        <DsChildPaper elevation={3}>
          <Typography
            variant="h5"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {header}
          </Typography>
        </DsChildPaper>
        {children}
      </DsPaper>
    </>
  );
};

export default Table;
