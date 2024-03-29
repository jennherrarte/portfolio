
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.css'

import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <Navbar className="navBar" bg="light">
        <Nav className="mr-auto">
        <Nav.Link className="navLink" href="#home">Home</Nav.Link>
        <Nav.Link className="navLink" href="#projects">Projects</Nav.Link>
        {/* <Nav.Link target="blank_" className="navLink" href="https://docs.google.com/document/d/1bZMr27c_ag51OyYtbxhTu67sCwuEMLAy8GdckDoSDQU/edit?usp=sharing">Resume</Nav.Link> */}
        <Nav.Link target="blank_" className="navLink" href="https://www.linkedin.com/in/jenniferherrarte/"><i id="navIcon" className="bi bi-linkedin"></i>LinkedIn</Nav.Link>
        </Nav>
        
        <Button id="cbutton" variant="outline-info"><a className="contactbtn" href="#contact">Contact</a></Button>
        
        
        </Navbar>

        </>
    )
}

export default NavBar



