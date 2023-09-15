import { Box } from "@mui/material";
import { BackgroundPaper, ContectPaper } from "./styles";
import Header from "./Header/Header";
import Settings from "./Settings/Settings";
import Informations from "./Informations/Informations";
import { VerDivider } from "../../../DS/Divider/Divider";
import Shares from "./Shares/Shares";

const Profile = () => {
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
        <Shares />
      </ContectPaper>
    </Box>
  );
};

export default Profile;
