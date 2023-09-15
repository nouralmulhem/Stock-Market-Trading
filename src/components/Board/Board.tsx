import { Box } from "@mui/material";
import Header from "./Header/Header";
import { useParams } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import Companies from "../AdminView/Companies/Companies";
import Investors from "../AdminView/Investors/Investors";
import Stocks from "../InvestorView/Stocks/Stocks";
import Profile from "../InvestorView/Profile/Profile";

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
    </Box>
  );
};

export default Board;
