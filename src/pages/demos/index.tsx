import { useState, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Navbar5 } from 'components/navbars';
import BackToTop from 'components/BackToTop';
import Footer from 'pages/Home/Footer';
import Connect from 'components/shared/Connect';
import SEO from 'components/SEO';
import csm from '../../assets/images/cinergie-motors.png'
import mobily from '../../assets/images/mobily-demo.png'
import assistantVideo from '../../assets/videos/Power-BI-Assistant.mp4'
import callAgentVideo from "../../assets/videos/call-agent.mp4"
import hip from "../../assets/images/hip.png"
import wms from "../../assets/images/wms-demo.png"

import './styles.css'

type DemoItem = {
    id: number;
    tag: string;
    title: string;
    description: string;
    demoUrl?: string;
    videoUrl?: string;
    image?: string;
};

// ── Video Modal ──────────────────────────────────────────────────────────────

type VideoModalProps = {
    videoUrl: string;
    onClose: () => void;
};

const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        // Prevent body scroll while modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    // Click on the backdrop (not the video) closes the modal
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="video-modal-backdrop" onClick={handleBackdropClick}>
            <div className="video-modal-container">
                <button
                    className="video-modal-close"
                    onClick={onClose}
                    aria-label="Close video"
                >
                    ✕
                </button>
                <video
                    ref={videoRef}
                    src={videoUrl}
                    controls
                    autoPlay
                    className="video-modal-player"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

// ── Demo data ────────────────────────────────────────────────────────────────

const demoItems: DemoItem[] = [
    {
        id: 1,
        tag: 'AI / ML',
        title: 'AI enabled HR portal',
        description:
            'HR portal with leave management, payslip access, and an AI chatbot that answers queries using dashboard data and company documents, with support for English and Arabic.',
        demoUrl: 'https://hr.cinergiedigital.com/login',
        image: mobily,
    },
    {
        id: 2,
        tag: 'AI / ML',
        title: 'Digital concerage for Automanufactures',
        description:
            'Chatbot for the automotive industry that handles user queries about car models, availability, dealership locations, and company policies such as servicing etc.',
        demoUrl: 'https://cm.cinergiedigital.com/cinergie-motors',
        image: csm,
    },
    {
        id: 3,
        tag: 'AI / ML',
        title: 'Cinergie HMS',
        description:
            'Explore a working prototype of Cinergie HMS, built to show how patient registration, lab workflows, and hospital-wide visibility come together in one system. Click through the modules below to see the platform in action.',
        demoUrl: 'http://13.229.78.75/cinergiehms/login',
        image: hip,
    },
    {
        id: 4,
        tag: 'ERP',
        title: 'WMS',
        description:
            'A live walkthrough of WMS Pro: real-time stock visibility, barcode-confirmed picking, and multi-warehouse control, built for how distributors actually run day to day.',
        demoUrl: 'https://wms.cinergiedigital.com/login',
        image: wms,
    },
    {
        id: 5,
        tag: 'AI / ML',
        title: 'AI Assistant for Power BI',
        description:
            'An AI-powered extension for Power BI dashboards that allows users to interact with charts and reports using natural language. It provides intelligent insights, answers data-related questions, and helps users understand dashboard trends more efficiently.',
        // Replace the path below with your actual video file or URL
        videoUrl: assistantVideo,
        // image: yourDemoImage,   ← add an image import + uncomment if you have one
    },
    {
        id: 6,
        tag: 'AI / ML',
        title: 'AI Customer Care Voice Agent',
        description:
            'An intelligent voice-based customer support agent capable of handling inbound calls, answering customer inquiries, providing information from a knowledge base, and delivering natural, human-like conversations. Designed to enhance customer experience, reduce support workload, and provide reliable 24/7 assistance.',
        // Replace the path below with your actual video file or URL
        videoUrl: callAgentVideo,
        // image: yourDemoImage,   ← add an image import + uncomment if you have one
    },
];

// ── Page ─────────────────────────────────────────────────────────────────────

const Demos = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

                                        {/* Play button overlay — only for video demos */}
                                        {demo.videoUrl && (
                                            <button
                                                className="demo-card-play-btn"
                                                onClick={() => setActiveVideo(demo.videoUrl!)}
                                                aria-label={`Play demo video for ${demo.title}`}
                                            >
                                                <span className="demo-card-play-icon">▶</span>
                                            </button>
                                        )}
                                    </div>

                                    <div className="demo-card-body">
                                        <span className="demo-card-tag">{demo.tag}</span>
                                        <h3>{demo.title}</h3>
                                        <p>{demo.description}</p>

                                        {/* Render link OR "Watch Demo" button depending on the demo type */}
                                        {demo.demoUrl ? (
                                            <a
                                                href={demo.demoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="demo-card-link"
                                            >
                                                View Live Demo
                                            </a>
                                        ) : demo.videoUrl ? (
                                            <button
                                                className="demo-card-link demo-card-link--video"
                                                onClick={() => setActiveVideo(demo.videoUrl!)}
                                            >
                                                Watch Demo
                                            </button>
                                        ) : null}
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

            {/* Video modal — rendered at the end so it sits above everything */}
            {activeVideo && (
                <VideoModal
                    videoUrl={activeVideo}
                    onClose={() => setActiveVideo(null)}
                />
            )}
        </div>
    );
};

export default Demos;