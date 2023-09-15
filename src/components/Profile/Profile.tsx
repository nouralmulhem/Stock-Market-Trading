import { Box } from "@mui/material";
import { BackgroundPaper, ContectPaper } from "./styles";
import Header from "./Header/Header";
import Settings from "./Settings/Settings";
import Informations from "./Informations/Informations";
import Shares from "../InvestorView/Shares/Shares";

// DS
import { VerDivider } from "../../DS/Divider/Divider";

// contexts
import { useIsAdmin } from "../../contexts/useIsAdmin";

const Profile = () => {
  const { isAdmin } = useIsAdmin();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <BackgroundPaper />
      <ContectPaper>
        <Header />
        <Box display={"flex"} width={"100"}>
          <Settings />
          <VerDivider />
          <Informations />
        </Box>
        {!isAdmin && <Shares />}
      </ContectPaper>
    </Box>
  );
};

export default Profile;
