import { Col, Container, Row } from 'react-bootstrap';

import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';
import SEO from 'components/SEO';
import csm from '../../assets/images/cinergie-motors.png'
import mobily from '../../assets/images/mobily-demo.png'

import './styles.css';

type DemoItem = {
    id: number;
    tag: string;
    title: string;
    description: string;
    demoUrl: string;
    image?: string;
};

const demoItems: DemoItem[] = [
    {
        id: 1,
        tag: 'AI / ML',
        title: 'AI enabled HR portal',
        description:
            'HR portal with leave management, payslip access, and an AI chatbot that answers queries using dashboard data and company documents, with support for English and Arabic.',
        demoUrl: 'https://crm.cinergiedigital.com',
        image: mobily,
    },
    {
        id: 2,
        tag: 'AI / ML',
        title: 'Digital concerage for Automanufactures',
        description:
            'Chatbot for the automotive industry that handles user queries about car models, availability, dealership locations, and company policies such as servicing etc.',
        demoUrl: 'https://demos.cinergiedigital.com/cinergie-motors/',
        image: csm,
    },
];

const Demos = () => {
    return (
        <div className="demos-page" style={{ fontFamily: "Garet" }}>
            <SEO
                title="Demo Showcase | Cinergie Digital"
                description="Explore static demo showcases of enterprise-grade digital modules by Cinergie Digital."
                url="https://cinergiedigital.com/demos"
            />

            <Navbar5 isSticky hideSearch forceLightBrand />
            <div className="demos-hero">
                <Container>
                    <div className="demos-hero-content">
                        <h1 className="fw-bold" style={{ fontFamily: "Garet" }}>The Architecture of Innovation</h1>
                        <p style={{ fontFamily: "Garet" }}>
                            Explore our suite of enterprise-grade digital solutions. Each module is engineered for
                            scalability, security, and tactical precision in high-stakes environments.
                        </p>
                    </div>
                </Container>
            </div>

            <section className="demos-grid-section">
                <Container>
                    <Row className="g-4">
                        {demoItems.map((demo) => (
                            <Col key={demo.id} lg={4} md={6}>
                                <article className="demo-card">
                                    <div className="demo-card-media">
                                        {demo.image ? (
                                            <img
                                                src={demo.image}
                                                alt={demo.title}
                                                className="demo-card-image"
                                            />
                                        ) : (
                                            <div className={`demo-card-visual visual-${demo.id}`} />
                                        )}
                                    </div>
                                    <div className="demo-card-body">
                                        <span className="demo-card-tag">{demo.tag}</span>
                                        <h3>{demo.title}</h3>
                                        <p>{demo.description}</p>
                                        <a
                                            href={demo.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="demo-card-link"
                                        >
                                            View Live Demo
                                        </a>
                                    </div>
                                </article>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Connect
                title="Let Us Build Your Next Demo"
                description="Talk to our team to transform this showcase into tailored enterprise solutions for your organization."
            />
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Demos;
