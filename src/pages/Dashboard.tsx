import { Box } from "@mui/material";
import Board from "../components/Board/Board";
import Sidebar from "../components/Sidebar/Sidebar";
import { IsAdminProvider } from "../contexts/useIsAdmin";

const Dashboard = () => {
  return (
    <IsAdminProvider>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Board />
      </Box>
    </IsAdminProvider>
  );
};

export default Dashboard;
