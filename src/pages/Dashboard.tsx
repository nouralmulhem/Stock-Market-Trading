import { Box } from "@mui/material";
import Board from "../components/Board/Board";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//contexts
import { IsAdminProvider } from "../contexts/useIsAdmin";
import { useCurrentUser } from "../contexts/useCurrentUser";

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (!currentUser) navigate("/authentication/signin");
  }, [currentUser]);

  return (
    <IsAdminProvider>
      <Box display={"flex"}>
        <Sidebar />
        <Board />
      </Box>
    </IsAdminProvider>
  );
};

export default Dashboard;
