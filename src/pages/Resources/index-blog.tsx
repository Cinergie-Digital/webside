import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';

// import Hero from './Hero';

// import hero from 'assets/images/4b7001f0-21bb-4aad-b685-e4d0210f26cd.webp';
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';
// import Team from './Team';
// import { teamMembers } from './data';
import Platform from './blog';
import SEO from '../../components/SEO';
const Blog = () => {
    return (
        <div
            style={{
                background: '#4F6D7A'
            }}>
            <div
                className="bg-gradient2"
                style={{
                    // background: `url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    position: 'relative',
                    fontFamily: 'Garet'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: '#4F6D7A',
                        backdropFilter: 'blur(0.5px)',
                        fontFamily: 'Garet'
                    }}
                ></div>

                <SEO
                    title="Case Studies & Insights | Digital Transformation Resources by Cinergie Digital   "
                    description="Explore expert insights, case studies, and blogs on AI, cloud, and enterprise digital transformation. Learn how innovation drives business success.    "
                    url="https://cinergiedigital.com/"
                />
                <Navbar5
                    isSticky={true}
                    hideSearch

                />

                {/* <Hero /> */}
            </div>
            {/* 
            <Team teamMembers={teamMembers} /> */}
            <Platform />
            <Connect title="Get In Touch" description="Get in touch with us today to learn more about how we can help you unlock the full potential of your organization through our IT services." />
            <Footer />

            <BackToTop />
        </div>
    );
};

export default Blog;