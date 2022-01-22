import React from "react";
import RestaurantLogo from "../../images/simple-icons_codechef.png"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Image, Container,Col} from 'react-bootstrap'
import './NavigationBar.css'
import HomeIcon from "../../images/home-icon.png"
import MenuIcon from "../../images/menu-icon.png"
import ContactIcon from "../../images/contact-icon.png"
import Page from "./Page";
import PageOnMobile from "./PageOnMobile";


const NavigationBar = () => {
    return(
        <Navbar className=" d-flex nav-background">
            <Col>
                <Nav className="d-none d-md-flex align-items-center" > 
                    <Image className="mx-4 my-1" src={RestaurantLogo} alt="restaurant logo"></Image>
                    <Page 
                        source="/"
                        name="Home"
                    />
                    <Page 
                        source="/menu"
                        name="Menu"
                    />
                    <Page 
                        source="/contact"
                        name="Contact"
                    />
                </Nav>
                <Nav className=" justify-content-end d-md-none d-flex align-items-center" >
                    <Image className="restaurant-logo my-1 mx-3" src={RestaurantLogo} alt="restaurant logo"></Image>
                    <Container fluid className="d-flex justify-content-end nav-container active-page">
                        <PageOnMobile
                            source="/"
                            icon={HomeIcon}
                        />  
                        <PageOnMobile
                            source="/menu"
                            icon={MenuIcon}
                        />  
                        <PageOnMobile
                            source="/contact"
                            icon={ContactIcon}
                        />  
                    </Container>
                </Nav> 
            </Col>
        </Navbar>
    );
}

export default NavigationBar;