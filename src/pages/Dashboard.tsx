import { Box } from "@mui/material";
import Board from "../components/Board/Board";
import Sidebar from "../components/Sidebar/Sidebar";
import { IsAdminProvider } from "../contexts/useIsAdmin";
import { CurrentUserProvider } from "../contexts/useCurrentUser";

const Dashboard = () => {
  return (
    <IsAdminProvider>
      <CurrentUserProvider>
        <Box display={"flex"}>
          <Sidebar />
          <Board />
        </Box>
      </CurrentUserProvider>
    </IsAdminProvider>
  );
};

export default Dashboard;
