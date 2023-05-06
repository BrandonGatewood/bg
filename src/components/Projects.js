import { Container, Row, Col } from 'react-bootstrap';
import blurp from '../assets/img/blurp-logo.svg';
import sneakahs from '../assets/img/sneakahs-logo.svg';
import gifiks from '../assets/img/gifiks-logo.svg';
import comingSoon from '../assets/img/coming-soon.svg';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import '../css/projects.css';

export const Projects = () => {
    const myProjects = [
        {
            title: 'Blurp',
            description: 'Capstone project in a team of 12. Blurp is a user-friendly web application for users to map out their relationships in a creative and visual way.',
            imgUrl: blurp,
            link: 'https://blurp-pdx.netlify.app/',
        },
        {
            title: 'Gifiks',
            description: 'Class project in a team of 2 implemented with Android Studio and Java. Gifiks is android social media app where users can post, share, and like Gifs.',
            imgUrl: gifiks,
            link: 'https://github.com/BrandonGatewood/Gifiks',
        },
        {
            title: 'Sneakahs',
            description: 'COMING SOON. Personal project implemented with React, Java, and Springboot. Sneakahs is a user-friendly web application for sneakerheads to compare sneaker prices from top reselling apps in one place',
            imgUrl: sneakahs,
            link: 'https://blurp-pdx.netlify.app/',
        },
        {
            title: 'Python api',
            description: 'COMING SOON. Personal project implemented with React, Python, and Flask. Not sure what Ill be making for this project.',
            imgUrl: comingSoon,
            link: 'https://blurp-pdx.netlify.app/',
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div> 
                                <h2>Projects</h2>
                                <p>Here are some cool school and personal projects Ive completed and currently working on.</p>
                                <Container>
                                    <Row>
                                    {
                                        myProjects.map((project) => {
                                            return (
                                                <Col size={12} lg={6}>
                                                    <a classname="project-link" href={project.link} target='_blank' rel="noopener noreferrer" >
                                                        <div className="proj-imgbx">
                                                            <img src={project.imgUrl} />
                                                            <div className="proj-txtx">
                                                                <h4>{project.title}</h4>
                                                                <span>{project.description}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Col>
                                            );
                                        })
                                    }
                                    </Row>
                                </Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
                <p>Check out my Github for more awesome projects!</p>
            </Container>
        </section>
    );
}