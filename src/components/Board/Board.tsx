import { Box } from "@mui/material";
import Header from "./Header/Header";
import { useParams } from "react-router-dom";
import Dashboard from "../AdminView/Dashboard/Dashboard";
import Companies from "../AdminView/Companies/Companies";
import Investors from "../AdminView/Investors/Investors";
import Stocks from "../InvestorView/Stocks/Stocks";

const Board = () => {
  // const navigate = useNavigate();
  // const { currentUser } = useCurrentUser();

  // useEffect(() => {
  //   console.log(currentUser);
  //   if (!currentUser) navigate("/authentication/signin");
  // }, [currentUser]);

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
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingRight: 4,
      }}
    >
      <Header />
      {renderer(param)}
    </Box>
  );
};

export default Board;
