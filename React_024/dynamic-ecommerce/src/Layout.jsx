import Header from "./components/header";
import Footer from "./components/footer";
import NavigationMenu from "./components/navigationMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <NavigationMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
