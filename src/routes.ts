
import Landing from "./pages/Landing";
import Authentication from "./pages/Authentication";


type Routes = {
  name: string;
  key: string;
  icon?: JSX.Element;
  route: string,
  component: React.FunctionComponent<any>,
}

const routes : Routes[] = [
  {
    name: "Authentication",
    key: "authentication",
    route: "/authentication/:param",
    component: Authentication,
  },
  {
    name: "Landing",
    key: "landing",
    route: "/Landing",
    component: Landing,
  },
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   // icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/dashboard",
  //   component: Dashboard,
  // },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   // icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/tables",
  //   component: Tables,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   // icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: Billing,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   // icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: Notifications,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   // icon: <Icon fontSize="small">person</Icon>,
  //   route: "/profile",
  //   component: Profile,
  // },
];

export default routes;
