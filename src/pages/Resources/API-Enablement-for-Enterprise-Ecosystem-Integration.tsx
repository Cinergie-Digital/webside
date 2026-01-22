import React from 'react';
import { useEffect } from "react";
import { Navbar2 } from 'components/navbars';
import Footer from 'pages/Home/Footer';
import BackToTop from 'components/BackToTop';
import Connect from 'components/shared/Connect';
import './styles.css';
import coverImage from '../../assets/images/api-enablement-enterprise-integration-cinergie.jpg';

const ApiEnablementCaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar2 isSticky hideSearch />

            <main className="blog-container">
                <article className="blog-article">
                    <header className="blog-header">
                        <h1
                            className="hero-title"
                            style={{
                                fontSize: '3.2rem',
                                fontWeight: 600,
                                lineHeight: 1.2,
                                fontFamily: 'Garet',
                            }}
                        >
                            API Enablement for Enterprise Ecosystem Integration
                        </h1>
                        <p className="blog-date" style={{ fontFamily: 'Garet' }}>January 08, 2026</p>
                        <img
                            src={coverImage}
                            alt="Cinergie Digital API enablement framework supporting secure and scalable enterprise system integrations."
                            className="blog-cover"
                        />
                    </header>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Client’s Background
                        </h2>
                        <p style={{ fontFamily: 'Garet' }}>
                            A large enterprise operated a complex digital ecosystem consisting of internal platforms, partner systems, and third-party services. Over time, integrations had grown organically through point-to-point connections, custom scripts, and manual data exchanges.
                        </p>
                        <p style={{ fontFamily: 'Garet' }}>
                            As the organization expanded its partner's network and digital channels, these integrations became fragile, slow to change, and difficult to govern.
                        </p>
                        <p style={{ fontFamily: 'Garet' }}>
                            Leadership needed a scalable way to integrate systems and partners without increasing operational risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            The Challenge
                        </h2>
                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Tight coupling between systems through point-to-point integrations</li>
                            <li>Limited visibility into data flows and dependencies</li>
                            <li>High effort required to onboard new partners or services</li>
                            <li>Inconsistent security and access controls across integrations</li>
                            <li>Difficulty supporting real-time data exchange</li>
                            <li>Integration changes impacting multiple systems unexpectedly</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Our Solution
                        </h2>
                        <p style={{ fontFamily: 'Garet' }}>
                            Cinergie Digital designed and implemented an <strong style={{ fontFamily: 'Garet' }}>API Enablement Strategy</strong> that standardized how systems communicated across the enterprise ecosystem.
                        </p>
                        <p style={{ fontFamily: 'Garet' }}>
                            Rather than replacing existing systems, we focused on <strong style={{ fontFamily: 'Garet' }}>decoupling, standardization,</strong> and <strong style={{ fontFamily: 'Garet' }}>governance</strong>, creating a foundation that supported scalability and controlled growth.
                        </p>
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Key Steps
                        </h2>

                        <h3 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Integration Landscape Assessment
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Reviewed existing integrations, dependencies, and risk points across systems.
                        </p>

                        <h3 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            API Strategy and Standards Definition
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Defined API design standards, versioning principles, and documentation guidelines.
                        </p>

                        <h3 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Security and Access Controls
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Implemented consistent authentication, authorization, and throttling mechanisms.
                        </p>

                        <h3 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Decoupling and Integration Layer Design
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Introduced APIs and middleware patterns to reduce point-to-point dependencies.
                        </p>

                        <h3 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Partner and Internal Enablement
                        </h3>
                        <p style={{ fontFamily: 'Garet' }}>
                            Supported teams and partners with documentation, onboarding guidelines, and governance processes.
                        </p>
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            The Impact
                        </h2>
                        <ul style={{ fontFamily: 'Garet' }}>
                            <li>Faster onboarding of partners and services</li>
                            <li>Reduced integration failures and operational risk</li>
                            <li>Improved visibility into data flows and dependencies</li>
                            <li>Better security and access control across integrations</li>
                            <li>A scalable foundation for future digital initiatives</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
                            Conclusion
                        </h2>
                        <p style={{ fontFamily: 'Garet' }}>
                            Cinergie Digital helped the enterprise move from fragile, tightly coupled integrations to a <strong style={{ fontFamily: 'Garet' }}>scalable, governed API ecosystem</strong>. This enabled the organization to grow its digital footprint while maintaining stability, security, and control.
                        </p>
                    </section>
                </article>
            </main>

            <Connect
                title="Get In Touch"
                description="Let's discuss how Cinergie can help you modernize your operations with data-driven solutions."
            />
            <Footer />
            <BackToTop />
        </>
    );
};

export default ApiEnablementCaseStudy;
