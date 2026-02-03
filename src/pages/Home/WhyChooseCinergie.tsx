import React from "react";
import "./WhyChooseCinergie.css";
import provenLeadership from "../../assets/images/Proven-Leadership.png";
import skilledProfessionals from "../../assets/images/Skilled-Professionals.jpg";
import tailoredSolutions from "../../assets/images/Tailored- Solutions.png";
// Inline SVG icon components (no external icon library)
const WhyChooseCinergie: React.FC = () => {
const ShieldIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 36 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <path
      d="M12 2l7 4v5c0 5-3.582 9.74-7 11-3.418-1.26-7-6-7-11V6l7-4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const HeartbeatIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 36 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <path d="M2 12h4l2-4 3 9 2-6 3 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const EyeIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 36 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <path d="M1 12C4.5 6 8.5 4 12 4s7.5 2 11 8c-3.5 6-7.5 8-11 8S4.5 18 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const LockIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 36 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const CoinIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 36 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M10.5 9.5h3a1.5 1.5 0 1 1 0 3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 8v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const ScaleIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 36 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
  >
    <path d="M12 3v3M6 8l3 8h6l3-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M7 8v2a3 3 0 0 0 6 0V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
const items = [
  {
    title: "Proven Leadership",
    text: "Global IT consulting expertise with local guidance. Cinergie Digital’s leaders bring 19+ years of experience helping enterprises accelerate digital transformation. ",
    img: provenLeadership,
    alt: "Proven leadership team guiding enterprise digital transformation",
  },
  {
    title: "Skilled Professionals",
    text: "A team of certified IT consultants, engineers, and data experts delivering bold, scalable solutions that drive measurable business impact. ",
    img: skilledProfessionals,
    alt: "Skilled IT professionals delivering enterprise solutions",
  },
  {
    title: "Tailored Solutions",
    text: "No one-size-fits-all.         Cinergie Digital custom-builds IT solutions in AI, cloud, and data engineering to match your exact enterprise level needs. ",
    img: tailoredSolutions,
    alt: "Tailored IT solutions for enterprise AI, cloud, and data engineering",
  },
];

  const features = [
    { Icon: ShieldIcon, title: "Security", text: "Least-privilege access, secrets management, and regular vulnerability scans.", color: "text-primary" },
    { Icon: HeartbeatIcon, title: "Reliability", text: "SLO-backed uptime, proactive monitoring, and incident playbooks.", color: "text-danger" },
    { Icon: EyeIcon, title: "Transparency", text: "Clear audit trails, sprint demos, and accessible documentation.", color: "text-info" },
    { Icon: LockIcon, title: "Data Protection", text: "Encryption at rest and in transit with enterprise-grade security.", color: "text-success" },
    { Icon: CoinIcon, title: "Cost Governance", text: "Predictable billing via FinOps reviews and real-time usage alerts.", color: "text-warning" },
    { Icon: ScaleIcon, title: "Compliance", text: "GDPR-aligned workflows and ISO-standard hosting practices.", color: "text-secondary" },
  ];

  return (
    <>
      {/* Why Choose Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff"}}>
        <div className="container">
          <h2 className="text-center mb-5 fw-bold"style={{ color: "black",  fontFamily: 'Garet', fontSize: '2.5rem' }}>Why Choose Cinergie?</h2>
          <div className="row g-4">
            {items.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm border-0 rounded-3">
                <img
  src={item.img}
  className="card-img-top rounded-top uniform-image-style"
  alt={item.alt}
  style={{
    height: "220px",
    objectFit: "cover",
    filter: "brightness(0.95) contrast(1.05)",
    
  }}
/>

                 
                <section className="dark-section">
  <div className="card-body text-center" >
    <h3 className="fw">{item.title}</h3>
    <p className="text">{item.text}</p>
  </div>
</section>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="py-5 bg-dark-blue"style={{backgroundColor: "#86878D" }}>
  <div className="container">
   <h2 className="text-center mb-5 fw-bold" style={{ color: "white",  fontFamily: 'Garet', fontSize: '2.5rem' }}>
  How Cinergie Digital Delivers Secure, Compliant & Reliable IT Solutions?
</h2>




          <div className="row g-4">
  {features.map((feature, idx) => (
    <div className="col-md-4" key={idx}>
      <div
        className="card h-100 border-0 rounded-4 shadow-lg p-5 text-center"
        style={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 1rem 2rem rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 .5rem 1rem rgba(0,0,0,0.1)";
        }}
      >
        <div className="mb-4 d-flex justify-content-center">
          <feature.Icon className={`${feature.color}`} size={48} />
        </div>
     <section className="dark-section">
  <h3 className="feature-title">{feature.title}</h3>
  <p className="feature-text">{feature.text}</p>
</section>

      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseCinergie;
 