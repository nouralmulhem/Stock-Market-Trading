import {
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Typography,
  Badge,
} from "@mui/material";
import { BoardHeader } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import InputField from "../../../DS/WhiteInput/InputField";

// icons
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const tabs = {
  dashboard: {
    text: "Dashboard",
    icon: <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  companies: {
    text: "Companies",
    icon: <ApartmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  investors: {
    text: "Investors",
    icon: <PaidIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  stocks: {
    text: "Stocks",
    icon: <ShowChartIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
  profile: {
    text: "Profile",
    icon: <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  },
};

const renderer = (param: string | undefined) => {
  switch (param) {
    case "dashboard":
      return tabs.dashboard;
    case "companies":
      return tabs.companies;
    case "investors":
      return tabs.investors;
    case "stocks":
      return tabs.stocks;
    case "profile":
      return tabs.profile;
    default:
      return null;
  }
};

const Header = () => {
  const { param } = useParams();
  const navigate = useNavigate();
  const renered = useMemo(() => {
    return renderer(param);
  }, [param]);

  return (
    <BoardHeader>
      <Box>
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="small" sx={{ color: "white" }} />
          }
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="white"
            onClick={() => navigate(`/dashboard/dashboard`)}
          >
            <IconButton sx={{ color: "white" }} size="small">
              <HomeIcon fontSize="inherit" />
            </IconButton>
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="white"
          >
            {renered?.icon}
            {renered?.text}
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <InputField
          color="info"
          label="Search"
          variant="outlined"
          size="small"
        />
        <IconButton>
          <PersonIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <SettingsIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon fontSize="small" sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Box>
    </BoardHeader>
  );
};

export default Header;
