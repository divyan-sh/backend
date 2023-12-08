import Container from "react-bootstrap/esm/Container";
import NavBarWrapper from "./Navbar";
import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <NavBarWrapper />
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export default Layout;
