import {useState, useEffect} from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import githubIcon from '../assets/img/github.svg';
import linkedinIcon from '../assets/img/linkedin.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
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
        <Navbar expand='lg' className={scrolled ? 'scrolled': ''}>
            <Container>
                <Navbar.Brand href='#home'>
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
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span classname='navbar-text'>
                        <div classname='social-icon'>
                            <a href="/#"><img src={githubIcon} alt=""/></a>
                            <a href="/#"><img src={linkedinIcon} alt=""/></a>
                        </div>
                        <button className="vvd"><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}