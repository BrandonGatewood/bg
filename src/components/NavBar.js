import {useState, useEffect} from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import githubIcon from '../assets/img/github.svg';
import linkedinIcon from '../assets/img/linkedin.svg';
import { HashLink } from 'react-router-hash-link'
import {
    BrowserRouter as Router
} from  'react-router-dom'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
   
    useEffect(() => {
        const onScroll = () => {
            if(window.screenY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Router>
            <Navbar expand='md' className={scrolled ? 'scrolled': ''}>
                <Container>
                    <Navbar.Brand href='/'>
                        Brandon Gatewood
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'>
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>
                                Experience
                            </Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span classname='navbar-text'>
                            <div classname='social-icon'>
                                <a href="/#"><img src={githubIcon} alt="Github Icon"/></a>
                                <a href="/#"><img src={linkedinIcon} alt="Linkedin Icon"/></a>
                            </div>
                            <HashLink to='#Connect'>
                                <button className="vvd"><span>Let's Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}