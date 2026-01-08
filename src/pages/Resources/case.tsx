import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import coverImage from '../../assets/images/real-time-order-tracking-dashboard-supply-chain-cinergie-digital.jpg';
import Picture1 from '../../assets/images/Picture1.jpg';
import Image from '../../assets/images/predictive-freight-intelligence-cinergie-digital.jpg';
import Picture3 from '../../assets/images/regulatory-reporting-automation-cinergie-digital.jpg';
import blogImage from "../../assets/images/enterprise-digital-transformation-insights-2025-2026.png"
import picture2 from '../../assets/images/predictive-intelligence-distributed-operations-cinergie.png'
import picture4 from '../../assets/images/enterprise-data-foundations-2025-cinergie.png'
import picture5 from '../../assets/images/enterprise-architecture-modernisation-cinergie.png'
import picture6 from '../../assets/images/digital-transformation-operating-model-cinergie.png'
import picture7 from '../../assets/images/why-ai-pilots-fail-to-scale-cinergie.png'
import picture8 from '../../assets/images/automation-readiness-enterprise-cinergie.png'
import picture9 from '../../assets/images/api-enablement-enterprise-integration-cinergie.jpg'
// import Connect from 'components/shared/Connect';

const Resources = () => {
  const teamResources = [
    {
      slug: "real-time-order-stream",
      title: "Digital Transformation Strategies",
      desc: "Learn how to implement effective digital transformation strategies for your enterprise. Transform your business into a smarter, data-driven enterprise ready for the digital future.",
      img: coverImage,
      alt: "Blog post on digital transformation strategies",
      badge: "TOP RATED",
      tags: ["#AI", "#Analytics", "#SupplyChain"]
    },
    {
      slug: "reimagining-loan-origination",
      title: "Reimagining Loan Origination with Hyperautomation",
      desc: "Revolutionizing loan origination with hyperautomation for speed & precision.",
      img: Picture1,
      alt: "Cinergie Digital AI-powered fraud detection dashboard analyzing transactions for anomalies.",
      badge: "FEATURED",
      tags: ["#Banking Automation"]
    },
    {
      slug: "Predictive-Freight-Intelligence",
      title: "Predictive Freight Intelligence for a Global Logistics Network ",
      desc: "AI-powered predictive freight for smarter global logistics.",
      img: Image,
      alt: "Cinergie Digital predictive analytics and MLOps framework optimizing freight efficiency for a global logistics enterprise.",
      badge: "TRENDING",
      tags: ["#Predictive Analytics"]
    },
    {
      slug: "Regulatory-Reporting-Automation",
      title: "Regulatory Reporting Automation for Compliance Teams",
      desc: "Streamline compliance with Regulatory Reporting Automation designed for modern compliance teams. Automate data collection, validation, and submission to ensure accuracy, transparency, and timely regulatory reporting.",
      img: Picture3,
      alt: "Cinergie Digital regulatory reporting dashboards supporting compliance teams with accurate submissions.",
      badge: "NEW",
      tags: ["#RegTech", "#Audit Readiness", "#RiskMgmt"]
    },
    {
      slug: "Resources/enterprise-digital-transformation-insights-2025-2026",
      title: "Enterprise Digital Transformation Insights for 2025 and 2026",
      desc: "Discover what changed in enterprise digital transformation in 2025 and the priorities leaders must adopt for 2026. Insights on AI, automation, cloud, and data.",
      img: blogImage,
      alt: "Cinergie Digital insights on enterprise digital transformation for 2025 and 2026.",
      badge: "NEW",
      tags: ["#Digital Transformation", "#Enterprise Strategy", "#AI and Automation"]
    },
    {
      slug: "case-studies/predictive-intelligence-distributed-operations",
      title: "Predictive Intelligence for Distributed Operations",
      desc: "Early risk alerts, less downtime, and smarter real-time decisions.",
      img: picture2,
      alt: "Cinergie Digital predictive intelligence dashboards providing risk insights across distributed enterprise operations.",
      badge: "NEW",
      tags: ["#Predictive Analytics", "#Enterprise AI"]
    },
    {
      slug: "resources/2025-enterprise-data-foundations-for-ai-success",
      title: "Enterprise Data Foundations for AI in 2025: What Leaders Must Fix",
      desc: "AI fails without solid data foundations.",
      img: picture4,
      alt: "Cinergie Digital insights on enterprise data foundations for AI readiness in 2025.",
      badge: "NEW",
      tags: ["#Enterprise Data", "#Data Governance"]
    },
    {
      slug: "resources/Enterprise-Architecture-Modernization",
      title: "Enterprise Architecture Modernization for Scalable Growth ",
      desc: "Modernizing enterprise architecture to enable scalability, resilience, and seamless integration across evolving business systems.",
      img: picture5,
      alt: " Cinergie Digital modern enterprise architecture enabling scalability, resilience, and integration across complex systems",
      badge: "NEW",
      tags: ["#System Modernization", "#Scalable Platforms"]
    },
    {
      slug: "resources/Why-Digital-Transformation-Fails",
      title: "Why Digital Transformation Fails Without an Operating Model",
      desc: "Digital transformation fails without a clear operating model.",
      img: picture6,
      alt: "Cinergie Digital operating model framework for executing digital transformation with clarity, governance, and accountability.",
      badge: "NEW",
      tags: ["#ExecutionFramework"]
    },
    {
      slug: "resources/Why-AI-Pilots-Fail-To-Scale",
      title: "Why AI Pilots Fail to Scale in Enterprises ",
      desc: "Why AI pilots succeed but fail to scale—and the foundations enterprises need for sustainable AI in production.",
      img: picture7,
      alt: "Cinergie Digital insights on why AI pilots fail to scale and how enterprises can move AI into production.",
      badge: "NEW",
      tags: ["#Enterprise AI", "#AI Deployment", "#AI Scaling"]
    },
    {
      slug: "resources/automation-readiness-enterprise",
      title: "Automation Readiness: Why Enterprises Automate Too Early",
      desc: "Building automation readiness for sustainable enterprise operations.",
      img: picture8,
      alt: "Building automation readiness for sustainable enterprise operations.",
      badge: "NEW",
      tags: ["#Automation Readiness"]
    },
    {
      slug: "case-studies/api-enablement-enterprise-ecosystem",
      title: "API Enablement for Enterprise Ecosystem Integration | Cinergie Digital",
      desc: "Learn how Cinergie Digital helped enterprise standardize and govern APIs to enable secure, scalable system and partner integration.",
      img: picture9,
      alt: "Cinergie Digital API enablement framework supporting secure and scalable enterprise system integrations.",
      badge: "NEW",
      tags: ["#API Enablement", "#System Integration", "#Enterprise Architecture"]
    }
  ];

  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>

      <section className="resources-section">
        <div className="resources-container">
          <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>Explore Cinergie Digital's Blogs, Guides & Case Studies</h2>

          {/* Row 1: Long left, Small right */}
          <div className="services-grid">
            <div className="left-column">
              <Link to={`/${teamResources[0].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[0].img} alt={teamResources[0].alt} />
                    <div className="metric-badge">{teamResources[0].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[0].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[0].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[0].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="right-column">
              <Link to={`/${teamResources[1].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[1].img} alt={teamResources[1].alt} />
                    <div className="metric-badge">{teamResources[1].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[1].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[1].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[1].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2: Small left, Long right (FLIPPED) */}
          <div className="services-grid services-grid-flipped">
            <div className="left-column">
              <Link to={`/${teamResources[2].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[2].img} alt={teamResources[2].alt} />
                    <div className="metric-badge">{teamResources[2].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[2].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[2].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet', paddingRight: '10px' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[2].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="right-column">
              <Link to={`/${teamResources[3].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[3].img} alt={teamResources[3].alt} />
                    <div className="metric-badge">{teamResources[3].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[3].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[3].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[3].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 1: Long left, Small right */}
          <div className="services-grid">
            <div className="left-column">
              <Link to={`/${teamResources[4].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[4].img} alt={teamResources[4].alt} />
                    <div className="metric-badge">{teamResources[4].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[4].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[4].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[4].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="right-column">
              <Link to={`/${teamResources[5].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[5].img} alt={teamResources[5].alt} />
                    <div className="metric-badge">{teamResources[5].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[5].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[5].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[5].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2: Small left, Long right (FLIPPED) */}
          <div className="services-grid services-grid-flipped">
            <div className="left-column">
              <Link to={`/${teamResources[6].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[6].img} alt={teamResources[6].alt} />
                    <div className="metric-badge">{teamResources[6].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[6].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[6].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet', paddingRight: '10px' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[6].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>


            <div className="right-column">
              <Link to={`/${teamResources[7].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[7].img} alt={teamResources[7].alt} />
                    <div className="metric-badge">{teamResources[7].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[7].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[7].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[7].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2: Long left, Small right (FLIPPED) */}
          <div className="services-grid">
            <div className="left-column">
              <Link to={`/${teamResources[9].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[9].img} alt={teamResources[9].alt} />
                    <div className="metric-badge">{teamResources[9].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[9].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[9].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet', paddingRight: '10px' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[9].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="right-column">
              <Link to={`/${teamResources[8].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[8].img} alt={teamResources[8].alt} />
                    <div className="metric-badge">{teamResources[8].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[8].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[8].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet', paddingRight: '10px' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[8].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="services-grid services-grid-flipped">
            <div className="left-column">
              <Link to={`/${teamResources[10].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[10].img} alt={teamResources[10].alt} />
                    <div className="metric-badge">{teamResources[10].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[10].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[10].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet', paddingRight: '10px' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[10].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>


            <div className="right-column">
              <Link to={`/${teamResources[11].slug}`} className="resource-card-link">
                <div className="resource-card">
                  <div className="card-image">
                    <img src={teamResources[11].img} alt={teamResources[11].alt} />
                    <div className="metric-badge">{teamResources[11].badge}</div>
                  </div>
                  <div className="resource-content">
                    <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{teamResources[11].title}</h3>
                    <p style={{ fontFamily: 'Garet' }}>{teamResources[11].desc}</p>

                    <div className="resource-footer">
                      <span className="cta-link" style={{ fontFamily: 'Garet' }}>Read More →</span>

                      <div className="labels">
                        {teamResources[11].tags.map((tag, i) => (
                          <span key={i} className="label">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Resources;