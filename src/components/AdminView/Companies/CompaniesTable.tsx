import { Box, Typography, Button, Avatar } from "@mui/material";

// Ds
import Table from "../../../DS/Table/Table";
import { HorDivider } from "../../../DS/Divider/Divider";

type Company = {
  src: string;
  name: string;
  amount?: number;
};

type CompaniesProps = {
  companies: Company[];
  Header: () => JSX.Element;
  buttonText: string;
  buttonAction?: () => void;
};

const CompaniesTable = (props: CompaniesProps) => {
  const { companies, Header, buttonText, buttonAction } = props;

  return (
    <Table header={<Header />}>
      <Box width={"100%"} marginBottom={5}>
        <Box display={"flex"} flexDirection={"column"}>
          {companies.map((item, index) => (
            <>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                paddingRight={3}
              >
                <Box display={"flex"} gap={3} alignItems={"center"}>
                  <Avatar src={item.src} variant="rounded" />
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography fontWeight={"bold"} color={"white"}>
                      {item.name}
                    </Typography>
                    {item.amount && (
                      <Typography variant="overline" color={"white"}>
                        Stocks owned by the company = {item.amount}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color={"info"}
                  size="small"
                  sx={{ height: "40px" }}
                  onClick={buttonAction}
                >
                  {buttonText}
                </Button>
              </Box>
              {index != companies.length - 1 && <HorDivider />}
            </>
          ))}
        </Box>
      </Box>
    </Table>
  );
};

export default CompaniesTable;
