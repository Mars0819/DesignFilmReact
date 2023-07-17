import { Navbar, NavLink, Container, Nav, NavbarBrand } from "react-bootstrap";
import "../style/Landingpage.css";
export const Navigationbar = () => {
  return (
    <Navbar variant="dark"> 
        <Container>
        <NavbarBrand href="#">MAR-FILM</NavbarBrand>
        <Nav>
            <NavLink href="#trending">TRENDING</NavLink>
            <NavLink href="#superhero">SUPERHERO</NavLink>
        </Nav>
        </Container>
    </Navbar>
  );
};
