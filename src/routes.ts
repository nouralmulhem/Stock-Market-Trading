import Landing from "./pages/Landing";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";

type Routes = {
  name: string;
  key: string;
  icon?: JSX.Element;
  route: string;
  component: React.FunctionComponent<any>;
};

const routes: Routes[] = [
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
  {
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard/:param",
    component: Dashboard,
  },
];

export default routes;
