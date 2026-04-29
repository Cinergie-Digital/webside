// index.tsx
import React, { useState, useEffect } from 'react';
import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Footer from 'pages/Home/Footer';
import Platform from './Platform';
import Timeline from './timeline';
import Connect from 'components/shared/Connect';
import SEO from '../../components/SEO';
import "./styles.css";
import About from "../../assets/images/About.png";
// const homeVideo = require('../../assets/videos/enterprise-it-consulting-and-ai-automation.mp4');

const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <SEO
        title="About Cinergie Digital | Empowering Enterprises With Technology & AI Solutions "
        description="Learn how Cinergie Digital helps global enterprises innovate with AI, cloud, and data-driven transformation. Your trusted technology partner from strategy to steady state. "
        url="https://cinergiedigital.com/"
      />
      {/* Hero Section */}
      <section
        className="position-relative"
        style={{
          minHeight: '100vh',
          fontFamily: 'Garet'
        }}
      >
        {/* Background Image */}
        <div
          className="hero-background-image position-absolute w-100 h-100"
          style={{
            backgroundImage: `url(${About})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            top: 0,
            left: 0,
            zIndex: -2,
            fontFamily: 'Garet'
          }}
        ></div>

        {/* Dark Overlay for contrast */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{


          }}
        ></div>

        {/* Navbar and Hero Text */}
        <div style={{ zIndex: 1, position: 'relative' }}>
          <Navbar5
            isSticky={true}
            hideSearch

          />

          <div className="d-flex flex-column align-items-center justify-content-center text-white text-center px-1" style={{ height: isMobile ? '70vh' : '80vh' }}>
            <h1 className="hero-title" style={{
              fontSize: isMobile ? '2.5rem' : '3.2rem',
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#fff",

              fontFamily: 'Garet',
              marginTop: 100

            }} >
              Digital Platform Outcomes
            </h1>
            <p
              style={{
                marginTop: '2rem',
                fontWeight: 500,
                fontSize: isMobile ? '1rem' : '1.125rem',
                maxWidth: '1000px',
                textAlign: 'center',
                // textShadow: '1px 1px 3px rgba(0, 0, 0, 1)',
                color: '#fff',
                fontFamily: 'Garet',
              }}
            >
              We enable technology-driven capabilities of an enterprise to effectively leverage digital technologies to transform its operations, increase efficiency, and deliver enhanced value to its customers. Through our expertise in cloud, data, and automation, we help organizations modernize legacy systems, streamline workflows, and build scalable digital ecosystems. Our goal is to empower businesses to innovate faster, make data-driven decisions, and stay competitive in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the Page */}
      <Platform isMobile={isMobile} />
      <Timeline isMobile={isMobile} />
      <Connect
        title="Get In Touch"
        description="Get in touch with us today to learn more about how we can help you succeed with these digital capabilities through our solutions and services."
      />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Blog;