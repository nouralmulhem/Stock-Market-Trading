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
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const ListElements = [
  { text: "Dashboard", icon: <InboxIcon sx={{ color: "white" }} /> },
  { text: "Starred", icon: <MailIcon /> },
  { text: "Send email", icon: <InboxIcon /> },
];

const Sidebar = () => {
  const page = useLocation().pathname;

  const drawer = (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar />
      <DsDivider variant="middle" />
      <DsList>
        {ListElements.map((entity, index) => (
          <DsListItem
            key={entity.text}
            disablePadding
            contained={page === `/${entity.text.toLowerCase()}`}
          >
            <ListItemButton>
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
      <Button variant="contained">Upgrade</Button>
    </Container>
  );
};

export default Sidebar;
