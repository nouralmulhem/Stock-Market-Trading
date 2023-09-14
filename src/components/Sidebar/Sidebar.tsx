import {
  Paper,
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  List,
  Button,
  Box,
} from "@mui/material";
import { Container, DsDivider, DsList, DsListItem } from "./styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate, useParams } from "react-router-dom";
import { useIsAdmin } from "../../contexts/useIsAdmin";
import { useCookies } from "react-cookie";

const ListElementsAdmin = [
  { text: "Dashboard", icon: <InboxIcon sx={{ color: "white" }} /> },
  { text: "Companies", icon: <MailIcon sx={{ color: "white" }} /> },
  { text: "Investors", icon: <InboxIcon sx={{ color: "white" }} /> },
];

const ListElementsInvestor = [
  { text: "Stocks", icon: <MailIcon sx={{ color: "white" }} /> },
];

const Sidebar = () => {
  const { param } = useParams();
  const navigate = useNavigate();
  const { isAdmin } = useIsAdmin();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const ListElements = isAdmin ? ListElementsAdmin : ListElementsInvestor;

  const drawer = (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar />
      <DsDivider variant="middle" />
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
          navigate("/authentication/signin");
          navigate(0);
        }}
      >
        Log out
      </Button>
    </Container>
  );
};

export default Sidebar;
