import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import "./footer.css";
import logoLight from '../../assets/images/white.svg';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="bg-dark-blue" style={{ backgroundColor: '#0a1628', padding: '60px 0 30px' }}>
            <Container>
                <Row className="align-items-start">
                    {/* Logo and Addresses */}
                    <Col lg={4} md={15} className="mb-4 mb-lg-0">
                        <div className="footer-logo-section">
                            <Link to="#" className="navbar-brand">
                                <img src={logoLight} alt="logo" height="50" className="d-inline-block align-top mb-4" />
                            </Link>
                            <div className="footer-address">
                                
                                <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                                    Office 1701, The Binary, Al Abraj Street, Business Bay, Dubai, UAE
                                </p>
                                 <div className="footer-get-in-touch">
                           
                            <p className="text-muted mb-2" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                                <a href="mailto:info@cinergiedigital.com" className="text-muted" style={{ textDecoration: 'none' }}>
                                    info@cinergiedigital.com
                                </a>
                            </p>
                            
                            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>+971 4 551 4344</p>
                        </div>
                            </div>
                        </div>
                    </Col>


                    {/* Company Links */}
                    <Col lg={2} md={4} className="mb-4 mb-md-0">
                        <div className="footer-links">
                            <h6 className="text-white mb-3 fw-semibold" style={{ fontSize: '16px' }}>Company</h6>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <HashLink to="/digital-platform-components" className="text-muted" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        About
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <Link to="/services" className="text-muted" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        Services
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="text-muted" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        Contact
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="/career"
                                        className="text-muted"
                                        style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        Careers
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="team"
                                        className="text-muted"
                                        style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        Resources
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    {/* Links - Partners */}
                    <Col lg={3} md={4}>
                        <div className="footer-partners">
                            <h6 className="text-white mb-3 fw-semibold" style={{ fontSize: '16px' }}>Industry</h6>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <HashLink to="/case-studies/bfsi" className="text-muted" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        BFSI
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="/case-studies/retailecommerce" className="text-muted" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        Retail & Ecommerce
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="/case-studies/transportlogistics" className="text-muted" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        Transport & Logistics
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="/case-studies/healthcare" className="text-muted" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                        Healthcare
                                    </HashLink>
                                </li>
                              <li className="mb-2">
                                    <HashLink to="/case-studies/enterprisedelivery" className="text-muted" style={{ fontSize: '14px', textDecoration: 'none' }}>
                                       Enterprise Delivery
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    
                    {/* Get in Touch */}
                    <Col lg={3} md={4} className="mb-4 mb-lg-0">
                        <div className="footer-get-in-touch">
                            <h6 className="text-white mb-3 fw-semibold" style={{ fontSize: '16px' }}>Products</h6>
                                                    
                                
                                    <ul className="list-unstyled">
                                        <li className="my-2">
                                            <Link to="/solutions/tibco" className="text-muted">
                                                TIBCO
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/solutions/singlestore" className="text-muted">
                                                SingleStore
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/solutions/nintex" className="text-muted">
                                                Nintex
                                            </Link>
                                        </li>
                                       
                                        <li className="my-2">
                                            <Link to="/solutions/bct" className="text-muted">
                                                BCT
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="/solutions/akinon" className="text-muted">
                                                Akinon
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
 </Row>
                            
                            
                 

                <Row className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Col md={6}>
                        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                            2026 © Cinergie Digital. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <div className="footer-social-icons">
                            <a href="https://www.linkedin.com/company/cinergie-digital" target="_blank" rel="noreferrer" className="text-muted me-3" style={{ fontSize: '18px', textDecoration: 'none' }}>
                                <FeatherIcon icon="linkedin" color="#6c757d" />
                            </a>
                            <a href="https://www.facebook.com/cinergiedigital.official" target="_blank" rel="noreferrer" className="text-muted me-3" style={{ fontSize: '18px', textDecoration: 'none' }}>
                                <FeatherIcon icon="facebook" color="#6c757d" />
                            </a>
                            <a href="https://twitter.com/CinergieD" target="_blank" rel="noreferrer" className="text-muted me-3" style={{ fontSize: '18px', textDecoration: 'none' }}>
                                <FeatherIcon icon="twitter" color="#6c757d" />
                            </a>
                            <a href="https://www.instagram.com/cinergiedigital" target="_blank" rel="noreferrer" className="text-muted" style={{ fontSize: '18px', textDecoration: 'none' }}>
                                <FeatherIcon icon="instagram" color="#6c757d" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;   