// src/pages/case-studies/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import logo from '../../assets/images/akin.png'
import tib from '../../assets/images/tib.jpg'
import nintex  from '../../assets/images/nintex.png'
import bct from '../../assets/images/Bahwan_CyberTek_Logo.jpg'
import single from '../../assets/images/single.jpg'

const CaseStudies = () => {
  const caseStudies = [
    {
      slug: "akinon",
      title: "Akinon",
      desc: [
        "Akinon is an enterprise e-commerce platform built for scalability and flexibility",
"It helps retailers and brands unify online and offline experiences",
"The platform supports omnichannel commerce, personalization, and integrations",
"Ideal for businesses seeking a modern digital retail transformation"
      ],
      img: logo,
      alt: "IT services for banking and financial institutions",
      badge: "180% ROI",
    },
     {
      slug: "tibco",
      title: "Tibco",
      desc: [
  "TIBCO provides data integration, analytics, and business intelligence solutions",
"It connects data from multiple sources for smarter decision-making",

      ],
      img: tib,
      alt: "Retail and ecommerce IT solutions for ERP and cloud platforms",
      badge: "GO LIVE IN 10 WEEKS",
    },
    {
      slug: "nintex",
      title: "Nintex",
      desc: [
       "Nintex is a leading process automation platform for workflow management",
"It enables businesses to automate repetitive processes without coding",

      ],
      img: nintex,
      alt: "Enterprise IT delivery and modernization services",
      badge: "85% ADOPTION",
    },
  {
      slug: "singlestore",
      title: "Singlestore",
      desc: [
        "SingleStore is a high-performance distributed SQL database for real-time analytics",
"It unifies transactions and analytics in a single engine",
"Developers use it to power fast, data-intensive applications at scale",
"Ideal for modern data-driven enterprises seeking low latency and flexibility"
      ],
      img: single,
      alt: "IT solutions for transport and logistics enterprises",
      badge: "+90% AUDIT COMPLIANCE",
    },
    {
      slug: "bct",
      title: "BCT (Bahwan CyberTek)",
      desc: [
    "BCT delivers digital transformation solutions across industries",
"Its platforms combine AI, analytics, and automation to drive efficiency",
"The company focuses on predictive insights and process optimization",
"Trusted by enterprises for innovation and operational excellence"
      ],
      img: bct,
      alt: "Healthcare IT services with analytics and secure systems",
      badge: "+80% PREDICTIVE ACCURACY",
    },
  
  ];

  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>
      <section className="services-section">
        <div className="services-container">
          <h2>Explore Our Products</h2>
          <p className="hero-subtext">
            Explore our products that empower digital transformation through data, automation, and innovation
          </p>
          
          {/* Row 1: Long left, Small right */}
          <div className="services-grid">
            <div className="left-column">
              <Link to={`/Solutions/${caseStudies[0].slug}`} className="resource-card-link">
                <div className="service-card">
                  <div className="card-image">
                    <img src={caseStudies[0].img} alt={caseStudies[0].alt} />
                 
                  </div>
                  <div className="service-content">
                    <h3 className="fw-medium subheading">{caseStudies[0].title}</h3>
                    <ul>
                      {caseStudies[0].desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="cta-link">Learn More →</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="right-column">
              <Link to={`/Solutions/${caseStudies[1].slug}`} className="resource-card-link">
                <div className="service-card">
                  <div className="card-image">
                    <img src={caseStudies[1].img} alt={caseStudies[1].alt} />
            
                  </div>
                  <div className="service-content">
                    <h3 className="fw-medium subheading">{caseStudies[1].title}</h3>
                    <ul>
                      {caseStudies[1].desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="cta-link">Learn More →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2: Small left, Long right (FLIPPED) */}
          <div className="services-grid services-grid-flipped">
            <div className="left-column">
              <Link to={`/Solutions/${caseStudies[2].slug}`} className="resource-card-link">
                <div className="service-card">
                  <div className="card-image">
                         <img src={caseStudies[2].img} alt={caseStudies[2].alt} />
                  </div>
                  <div className="service-content">
                    <h3 className="fw-medium subheading">{caseStudies[2].title}</h3>
                    <ul>
                      {caseStudies[2].desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="cta-link">Learn More →</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="right-column">
              <Link to={`/Solutions/${caseStudies[3].slug}`} className="resource-card-link">
                <div className="service-card">
                  <div className="card-image">
                            <img src={caseStudies[3].img} alt={caseStudies[3].alt} />
                  </div>
                  <div className="service-content">
                    <h3 className="fw-medium subheading">{caseStudies[3].title}</h3>
                    <ul>
                      {caseStudies[3].desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <span className="cta-link">Learn More →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
{/* Row 3: Full width card spanning both columns */}
<div className="services-grid">
  <div className="full-width-card">
    <Link to={`/Solutions/${caseStudies[4].slug}`} className="resource-card-link">
      <div className="service-card">
        <div className="card-image">
          <img src={caseStudies[4].img} alt={caseStudies[4].alt} />
          
        </div>
        <div className="service-content">
          <h3 className="fw-medium subheading">{caseStudies[4].title}</h3>
          <ul>
            {caseStudies[4].desc.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <span className="cta-link">Learn More →</span>
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

export default CaseStudies;