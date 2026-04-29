import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import classNames from 'classnames';
import "./nav.css";
// component

// images
import logo from '../../assets/images/official.svg';

type Navbar2Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
    hideSearch?: boolean;
};

const Navbar2 = ({ isSticky, navClass, buttonClass, fixedWidth, hideSearch }: Navbar2Props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [showWhatWeDo, setShowWhatWeDo] = useState(false);
    const [showInsights, setShowInsights] = useState(false);

    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 992; // Bootstrap's lg breakpoint
            setIsMobile(mobile);
            if (mobile) {
                setShowWhatWeDo(false);
                setShowInsights(false);
            } else {
                setShowWhatWeDo(false);
                setShowInsights(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // on scroll add navbar class and back to top button
    useEffect(() => {
        const btnTop = document.getElementById('btn-back-to-top');
        const navbar = document.getElementById('sticky');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (btnTop) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    btnTop.classList.add('show');
                } else {
                    btnTop.classList.remove('show');
                }
            }
            if (navbar) {
                if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240) {
                    navbar.classList.add('navbar-sticky');
                } else {
                    navbar.classList.remove('navbar-sticky');
                }
            }
        });
    }, []);

    const handleWhatWeDoToggle = (nextShow: boolean) => {
        setShowWhatWeDo(nextShow);
    };

    const handleInsightsToggle = (nextShow: boolean) => {
        setShowInsights(nextShow);
    };

    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass)}
            >
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/" className="me-lg-4 me-auto d-flex align-items-center">
                        <img src={logo} height="30" className="d-inline-block align-middle" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {!hideSearch && (
                            <Nav className="align-items-lg-center d-flex me-auto">
                                <Nav.Item as="li">
                                    <form id="search" className="form-inline d-none d-sm-flex me-lg-3">
                                        <div className="form-control-with-hint ms-lg-2 ms-xl-4">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="search-input"
                                                placeholder="What are you looking for?"
                                            />
                                            <span className="form-control-feedback uil uil-search fs-16"></span>
                                        </div>
                                    </form>
                                </Nav.Item>
                            </Nav>
                        )}

                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href="/" className="px-3">Home</Nav.Link>
                            <Nav.Link href="/About-us" className="px-3">About Us</Nav.Link>

                            {/* What We Do Dropdown */}
                            <NavDropdown
                                title={
                                    <>
                                        What We Do <span className="dropdown-chevron">▼</span>
                                    </>
                                }
                                id="what-we-do-dropdown"
                                renderMenuOnMount={true}
                                show={showWhatWeDo}
                                onToggle={handleWhatWeDoToggle}
                            >
                                <NavDropdown.Item href="/Products">Products</NavDropdown.Item>
                                <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                                <NavDropdown.Item href="/Industries">Industries</NavDropdown.Item>
                            </NavDropdown>

                            {/* Insights Dropdown */}
                            <NavDropdown
                                title={
                                    <>
                                        Insights <span className="dropdown-chevron">▼</span>
                                    </>
                                }
                                id="insights-dropdown"
                                renderMenuOnMount={true}
                                show={showInsights}
                                onToggle={handleInsightsToggle}
                            >
                                <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
                                <NavDropdown.Item href="/case-studies">Case Studies</NavDropdown.Item>
                                <NavDropdown.Item href="/demos">Demos</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/careers" className="px-3">Careers</Nav.Link>
                            <Nav.Link href="/contact" className="px-3">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar2;