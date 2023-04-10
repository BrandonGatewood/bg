import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import anImage from '../assets/img/endless-clouds.svg'
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import '../css/projects.css';

export const Projects = () => {
    const personalProjects = [
        {
            title: 'Sneakahs',
            description: 'COMING SOON. ',
            imgUrl: anImage,
        },
        {
            title: 'Some python api',
            description: 'COMING SOON.',
            imgurl: anImage,
        },
    ];
    
    const schoolProjects = [
        {
            title: 'Blurp',
            description: 'capstone project.',
            imgUrl: anImage,
        },
        {
            title: 'Gifiks',
            description: 'android social media app',
            imgUrl: anImage,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div> 
                                <h2>Projects</h2>
                                <p>Here are some cool school and personal projects Ive been working on or planning. Check out my Github for more awesome projects!</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">School Projects</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey='first'>
                                            <Row>
                                            {
                                                personalProjects.map((project) => {
                                                    return (
                                                        <Col size={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src={project.imgUrl} />
                                                                <div className="proj-txtx">
                                                                    <h4>{project.title}</h4>
                                                                    <span>{project.description}</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    );
                                                })
                                            }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='second'>
                                            <Row> 
                                            {
                                                schoolProjects.map((project) => {
                                                    return (
                                                        <Col size={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src={project.imgUrl} />
                                                                <div className="proj-txtx">
                                                                    <h4>{project.title}</h4>
                                                                    <span>{project.description}</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    );
                                                }) 
                                            }   
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}