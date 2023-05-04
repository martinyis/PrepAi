import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useTheme } from "@material-ui/core/styles";
const Layout = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
