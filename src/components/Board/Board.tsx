import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import Companies from "../AdminView/Companies/Companies";
import Investors from "../AdminView/Investors/Investors";
import Stocks from "../InvestorView/Stocks/Stocks";
import Profile from "../Profile/Profile";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Board = () => {
  const { param } = useParams();

  const renderer = (param: string | undefined) => {
    switch (param) {
      case "dashboard":
        return <Dashboard />;
      case "companies":
        return <Companies />;
      case "investors":
        return <Investors />;
      case "stocks":
        return <Stocks />;
      case "profile":
        return <Profile />;
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      paddingRight={4}
    >
      <Header />
      {renderer(param)}
      <Footer />
    </Box>
  );
};

export default Board;
