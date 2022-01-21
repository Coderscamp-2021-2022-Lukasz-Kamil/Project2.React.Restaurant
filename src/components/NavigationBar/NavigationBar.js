import React from "react";
import RestaurantLogo from "../../images/simple-icons_codechef.png"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Image, Container,Col, Button} from 'react-bootstrap'
import './NavigationBar.css'
import {NavLink} from "react-router-dom"
import HomeIcon from "../../images/home-icon.png"
import MenuIcon from "../../images/menu-icon.png"
import ContactIcon from "../../images/contact-icon.png"


const NavigationBar = () => {
    return(
        <Navbar className=" d-flex nav-background">
            <Col>
                <Nav className="d-none d-md-flex align-items-center" > 
                    <Image className="mx-4 my-1" src={RestaurantLogo} alt="restaurant logo"></Image>
                    <Nav.Link className="categories-text mx-3 p-4 active-page"> 
                        <NavLink exact to='/' className="text-decoration-none text-white" activeClassName="active">Home</NavLink>
                    </Nav.Link>      
                    <Nav.Link className="categories-text mx-3 p-4 active-page">
                        <NavLink to='/menu' className="text-decoration-none text-white" activeClassName="active">Menu</NavLink>
                    </Nav.Link>
                    <Nav.Link className="categories-text mx-3 p-4 active-page">
                        <NavLink  to='/contact' className="text-decoration-none text-white" activeClassName="active">Contact</NavLink>
                    </Nav.Link>
                </Nav>
                <Nav className=" justify-content-end d-md-none d-flex align-items-center" >
                    <Image className="restaurant-logo my-1 mx-3" src={RestaurantLogo} alt="restaurant logo"></Image>
                    <Container fluid className="d-flex justify-content-end nav-container active-page">
                        <NavLink exact to='/' className="text-decoration-none text-white" activeClassName="active">
                            <Button className="bg-transparent shadow-none border-none">
                                <Image src={HomeIcon}></Image>
                            </Button>
                        </NavLink>  
                        <NavLink exact to='/menu' className="text-decoration-none text-white" activeClassName="active">
                            <Button className="bg-transparent shadow-none border-none">
                                <Image src={MenuIcon}></Image>
                            </Button>
                        </NavLink>
                        <NavLink exact to='/contact' className="text-decoration-none text-white" activeClassName="active">
                            <Button className="bg-transparent shadow-none border-none">
                                <Image src={ContactIcon}></Image>
                            </Button>
                        </NavLink>
                    </Container>
                </Nav> 
            </Col>
        </Navbar>
    );
}

export default NavigationBar;