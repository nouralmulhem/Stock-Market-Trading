import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";

// Material Dashboard 2 React routes
import routes from "./routes";

// Material theme
import theme from "./styles/theme";
import Footer from "./components/Footer/Footer";

// Cookies
import { CookiesProvider } from "react-cookie";

function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes: any) =>
    allRoutes.map((route: any) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            path={route.route}
            Component={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/landing" />} />
        </Routes>
        <Footer />
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
