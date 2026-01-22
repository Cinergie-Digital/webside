import React from "react";
import "./Services.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Import images (replace with actual paths)
import advisoryImg from "../../assets/images/advisory-data-strategy-services.jpg";
import appDevImg from "../../assets/images/application-development-services.jpg";
import appModernImg from "../../assets/images/application-modernisation-maintenance.jpg";
import dataEngImg from "../../assets/images/data-engineering-analytics-services.png";
import aiImg from "../../assets/images/ai-automation-services.jpg";
import integrationImg from "../../assets/images/enterprise-integration-services.jpg";
import qaImg from "../../assets/images/qa-devops-services.jpg";
import managedImg from "../../assets/images/managed-it-services.jpg";
import teamsImg from "../../assets/images/teams-as-a-service.jpg";
import resourceImg from "../../assets/images/resource-augmentation-services.jpg";

const Services = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const services = [
    {
      title: "Advisory & Data Strategy",
      desc: [
        "Digital transformation & IT consulting",
        "Enterprise data strategy & governance",
        "Security, compliance & cost optimisation",
      ],
      img: advisoryImg,
      alt: "Advisory and enterprise data strategy IT services",
      badge: "95% STRATEGY SUCCESS",
    },
    {
      title: "Application Development",
      desc: [
        "Web & mobile app engineering",
        "API-first, cloud-native builds",
        "Agile, DevOps-enabled delivery",
      ],
      img: appDevImg,
      alt: "Enterprise application development and cloud-native builds",
      badge: "8-WEEK DELIVERY",
    },
    {
      title: "Application Modernization & Maintenance",
      desc: [
        "Cloud migration & re-platforming",
        "API enablement & refactoring",

      ],
      img: appModernImg,
      alt: "Application modernisation and legacy system migration",
      badge: "ZERO-DOWN MIGRATION",
    },
    {
      title: "Data Engineering & Analytics",
      desc: [
        "Data lake & warehouse design",
        "Real-time ETL/ELT pipelines",
        "BI dashboards, reporting & predictive analytics",
      ],
      img: dataEngImg,
      alt: "Data engineering and analytics services with ETL pipelines",
      badge: "90% DATA ACCURACY",
    },
    {
      title: "Artificial Intelligence & Automation",
      desc: [
        "Machine learning & MLOps",
        "RPA (bots & workflows)",
        "Finance operations automation",
      ],
      img: aiImg,
      alt: "Artificial intelligence and automation services for enterprises",
      badge: "80% AUTOMATION RATE",
    },
    {
      title: "Integration",
      desc: [
        "ERP & CRM integrations",
        "API gateway design & management",
        "Workflow automation across platforms",
      ],
      img: integrationImg,
      alt: "Enterprise IT integration services with ERP and API management",
      badge: "99% UPTIME",
    },
    {
      title: "QA & DevOps",
      desc: [
        "Test automation & CI/CD pipelines",
        "Observability dashboards & SLOs",
        "Rollback-ready pipelines & playbooks",
      ],
      img: qaImg,
      alt: "QA and DevOps services with CI/CD automation",
      badge: "100% TEST COVERAGE",
    },
    {
      title: "Managed Services",
      desc: [
        "24/7 monitoring & incident response",
        "FinOps & cost governance",
        "Continuous optimisation & reliability engineering",
      ],
      img: managedImg,
      alt: "Managed IT services with monitoring and cost governance",
      badge: "24/7 SUPPORT",
    },
    {
      title: "Teams as a Service",
      desc: [
        "Dedicated engineering pods",
        "Flexible onshore/offshore/hybrid models",
        "Integrated with client workflows",
      ],
      img: teamsImg,
      alt: "Teams as a Service embedded engineering pods",
      badge: "90% TEAM RETENTION",
    },
    {
      title: "Resource Augmentation",
      desc: [
        "On-demand staffing for niche skills",
        "Contract & long-term placements",
        "Enterprise-grade talent supply",
      ],
      img: resourceImg,
      alt: "Resource augmentation and IT talent staffing services",
      badge: "95% MATCH RATE",
    },
  ];

  return (
    <>
      <button id="scrollTopBtn" title="Go to top">↑</button>
      <section className="services-section">
        <div className="services-container">
          <h2 className="fw-bold" style={{ fontFamily: 'Garet' }}>
            Enterprise IT & Digital Services That Deliver Measurable Outcomes
          </h2>

          {/* Row 1: Long left (2fr), Small right (1fr) */}
          <div className="services-grid">
            <div className="left-column">
              <div className="service-card" id="advisory-data-strategy">
                <div className="card-image">
                  <img src={services[0].img} alt={services[0].alt} />
                  <div className="metric-badge">{services[0].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[0].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[0].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="service-card" id="application-development">
                <div className="card-image">
                  <img src={services[1].img} alt={services[1].alt} />
                  <div className="metric-badge">{services[1].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[1].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[1].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Small left (1fr), Long right (2fr) - FLIPPED */}
          <div className="services-grid services-grid-flipped">
            <div className="left-column">
              <div className="service-card" id="application-modernisation-maintaince">
                <div className="card-image">
                  <img src={services[2].img} alt={services[2].alt} />
                  <div className="metric-badge">{services[2].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[2].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[2].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="service-card" id="data-engineering-analytics">
                <div className="card-image">
                  <img src={services[3].img} alt={services[3].alt} />
                  <div className="metric-badge">{services[3].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[3].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[3].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Long left (2fr), Small right (1fr) */}
          <div className="services-grid">
            <div className="left-column">
              <div className="service-card" id="artifical-intelligence-automation">
                <div className="card-image">
                  <img src={services[4].img} alt={services[4].alt} />
                  <div className="metric-badge">{services[4].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[4].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[4].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="service-card" id="integration">
                <div className="card-image">
                  <img src={services[5].img} alt={services[5].alt} />
                  <div className="metric-badge">{services[5].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[5].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[5].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Small left (1fr), Long right (2fr) - FLIPPED */}
          <div className="services-grid services-grid-flipped">
            <div className="left-column">
              <div className="service-card" id="qa-devops">
                <div className="card-image">
                  <img src={services[6].img} alt={services[6].alt} />
                  <div className="metric-badge">{services[6].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[6].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[6].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="service-card" id="managed-services">
                <div className="card-image">
                  <img src={services[7].img} alt={services[7].alt} />
                  <div className="metric-badge">{services[7].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[7].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[7].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 5: Long left (2fr), Small right (1fr) */}
          <div className="services-grid">
            <div className="left-column">
              <div className="service-card" id="team-as-a-service">
                <div className="card-image">
                  <img src={services[8].img} alt={services[8].alt} />
                  <div className="metric-badge">{services[8].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[8].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[8].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="service-card" id="resource-augmentation">
                <div className="card-image">
                  <img src={services[9].img} alt={services[9].alt} />
                  <div className="metric-badge">{services[9].badge}</div>
                </div>
                <div className="service-content">
                  <h3 className="fw-medium subheading" style={{ fontFamily: 'Garet' }}>{services[9].title}</h3>
                  <ul style={{ fontFamily: 'Garet' }}>
                    {services[9].desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a href="/contact" className="cta-link" style={{ fontFamily: 'Garet' }}>Learn More →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;