import { Box } from "@mui/material";
import Board from "../components/Board/Board";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Board />
    </Box>
  );
};

export default Dashboard;
