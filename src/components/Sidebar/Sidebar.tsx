import {
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { Container, DsList, DsListItem } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useIsAdmin } from "../../contexts/useIsAdmin";
import { useCookies } from "react-cookie";
import { HorDivider } from "../../DS/Divider/Divider";

// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BlurLinearIcon from "@mui/icons-material/BlurLinear";

const ListElementsAdmin = [
  { text: "Dashboard", icon: <DashboardIcon sx={{ color: "white" }} /> },
  { text: "Companies", icon: <ApartmentIcon sx={{ color: "white" }} /> },
  { text: "Investors", icon: <PaidIcon sx={{ color: "white" }} /> },
];

const ListElementsInvestor = [
  { text: "Dashboard", icon: <DashboardIcon sx={{ color: "white" }} /> },
  { text: "Stocks", icon: <ShowChartIcon sx={{ color: "white" }} /> },
  { text: "Profile", icon: <PersonIcon sx={{ color: "white" }} /> },
];

const Sidebar = () => {
  const { param } = useParams();
  const navigate = useNavigate();
  const { isAdmin } = useIsAdmin();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const ListElements = isAdmin ? ListElementsAdmin : ListElementsInvestor;

  const drawer = (
    <Box flexGrow={1}>
      <Toolbar>
        <Typography
          color={"white"}
          display={"flex"}
          gap={2}
          variant={"h6"}
          alignItems={"center"}
        >
          <BlurLinearIcon fontSize="large" />
          Stock Market
        </Typography>
      </Toolbar>
      <HorDivider />
      <DsList>
        {ListElements.map((entity, index) => (
          <DsListItem
            key={entity.text}
            disablePadding
            contained={(param === entity.text.toLowerCase()).toString()}
          >
            <ListItemButton
              onClick={() =>
                navigate(`/dashboard/${entity.text.toLowerCase()}`)
              }
            >
              <ListItemIcon>{entity.icon}</ListItemIcon>
              <ListItemText primary={entity.text} sx={{ flexGrow: 1 }} />
            </ListItemButton>
          </DsListItem>
        ))}
      </DsList>
    </Box>
  );

  return (
    <Container>
      {drawer}
      <Button
        variant="contained"
        onClick={() => {
          removeCookie("user", { path: "/" });
          // window.location.href = "/authentication/signin";
          navigate("/authentication/signin");
        }}
      >
        Log out
      </Button>
    </Container>
  );
};

export default Sidebar;
