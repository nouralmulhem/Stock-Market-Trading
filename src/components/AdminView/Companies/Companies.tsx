import { useState } from "react";
import { Box, Dialog } from "@mui/material";
import CompaniesTable from "./CompaniesTable";

// icons
import ApartmentIcon from "@mui/icons-material/Apartment";
import ShowChartIcon from "@mui/icons-material/ShowChart";

// DS
import FormModal from "../../../DS/FormModal/FormModal";
import InputField from "../../../DS/WhiteInput/InputField";
import TwoButtons from "../../../DS/TwoButtons/TwoButtons";

const CompaniesHeader = () => {
  return (
    <>
      <ApartmentIcon />
      Companies
    </>
  );
};

const NewCompaniesHeader = () => {
  return (
    <>
      <ApartmentIcon />
      New Companies
    </>
  );
};

const companies = [
  { src: "/ibm.png", name: "IBM", amount: 13 },
  { src: "/msft.png", name: "Microsoft", amount: 30 },
  { src: "/atos.png", name: "Atos", amount: 7 },
  { src: "/siemens.png", name: "Siemens", amount: 14 },
];

const newCompanies = [
  { src: "/ibm.png", name: "Tensor Graph" },
  { src: "/msft.png", name: "Avelable" },
  { src: "/atos.png", name: "Raisa Energy" },
];

const Companies = () => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState<undefined | number>(undefined);

  const handleSubmit = () => {
    // if (amount) {
    //   setOpenSuccess(true);
    //   setTimeout(() => {
    //     setOpen(false);
    //   }, 3000);
    // } else {
    //   setOpenFail(true);
    // }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={7}>
        <CompaniesTable
          Header={CompaniesHeader}
          companies={companies}
          buttonText={"View Details"}
        />
        <CompaniesTable
          Header={NewCompaniesHeader}
          companies={newCompanies}
          buttonText={"Add Stocks"}
          buttonAction={() => {
            setOpen(true);
          }}
        />
      </Box>
      <Dialog onClose={handleClose} open={open}>
        <FormModal
          page="Add Stock to this Company"
          headerIcon={<ShowChartIcon sx={{ color: "white" }} />}
        >
          <InputField
            required
            type="number"
            color="info"
            variant="outlined"
            label="stock price"
            fullWidth
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
          />
          <Box sx={{ marginTop: 4 }}>
            <TwoButtons
              mainTxt="Submit"
              subTxt="Discard"
              mainColor="primary"
              subColor="info"
              mainVariant="contained"
              subVariant="contained"
              mainAction={handleSubmit}
              subAction={handleClose}
            />
          </Box>
        </FormModal>
      </Dialog>
    </>
  );
};

export default Companies;
