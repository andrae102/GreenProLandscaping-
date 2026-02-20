import React, { useEffect } from "react";
import "./index.css";

function App() {
  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.15)";
        } else {
          navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.08)";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* =================== NAVIGATION =================== */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="brand-icon">🌿</div>
            <span>GreenPro Landscaping</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={(e) => smoothScroll(e, "#services")}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery" onClick={(e) => smoothScroll(e, "#gallery")}>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>
                  Contact
                </a>
              </li>
              <li className="nav-item ms-3">
                <a href="tel:18764834938" className="btn btn-primary">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* =================== HERO =================== */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(236, 253, 245, 0.92), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Jamaica's Premier Landscaping Service
              </div>
              <h1>
                Transform Your{" "}
                <span className="gradient-text">Outdoor Space</span> Into
                Paradise
              </h1>
              <p className="lead">
                With our detailed landscaping services, you can transform your
                outdoor space into a beautiful, functional oasis. Professional
                care for residential and commercial properties across Jamaica.
              </p>
              <div className="mt-4">
                <a
                  href="tel:18764834938"
                  className="btn btn-primary btn-lg me-3"
                >
                  📞 Call (876) 483-4938
                </a>
                <a
                  href="#services"
                  className="btn btn-outline btn-lg"
                  onClick={(e) => smoothScroll(e, "#services")}
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== STATS =================== */}
      <section className="stats">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="stat-box">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== IMAGE SHOWCASE =================== */}
      <section className="image-showcase">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="showcase-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800')",
                }}
              >
                <div className="showcase-overlay">
                  <h4>Professional Lawn Care</h4>
                  <p>Expert mowing & maintenance</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="showcase-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800')",
                }}
              >
                <div className="showcase-overlay">
                  <h4>Landscape Design</h4>
                  <p>Beautiful outdoor spaces</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="showcase-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800')",
                }}
              >
                <div className="showcase-overlay">
                  <h4>Irrigation Systems</h4>
                  <p>Smart water management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== SERVICES =================== */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional landscaping solutions for every need
          </p>
          <div className="row g-4">
            {[
              {
                icon: "🌱",
                title: "Planting & Landscaping",
                desc: "Expert design and installation of beautiful landscapes tailored to your vision and environment.",
              },
              {
                icon: "🌿",
                title: "Lawn Mowing & Maintenance",
                desc: "Regular lawn care to keep your grass healthy, green, and perfectly manicured year-round.",
              },
              {
                icon: "💧",
                title: "Irrigation & Water Management",
                desc: "Efficient watering systems designed to conserve water while keeping your landscape thriving.",
              },
              {
                icon: "🍂",
                title: "Seasonal Clean-Up",
                desc: "Comprehensive cleaning services to prepare your outdoor space for each season's unique needs.",
              },
              {
                icon: "🌳",
                title: "Tree & Shrub Removal",
                desc: "Safe and professional removal of unwanted trees and shrubs with complete debris cleanup.",
              },
              {
                icon: "🦟",
                title: "Weed & Pest Control",
                desc: "Effective treatments to eliminate weeds and pests while protecting your plants and lawn.",
              },
            ].map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== GALLERY =================== */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            See the transformations we've created across Jamaica
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="gallery-item"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1599629954294-1032d5d37e84?w=800')",
                }}
              >
                <div className="gallery-content">
                  <div style={{ fontSize: "60px", marginBottom: "10px" }}>🏡</div>
                  <h5 style={{ fontWeight: "700" }}>Residential Lawns</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="gallery-item"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800')",
                }}
              >
                <div className="gallery-content">
                  <div style={{ fontSize: "60px", marginBottom: "10px" }}>🌴</div>
                  <h5 style={{ fontWeight: "700" }}>Garden Design</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="gallery-item"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800')",
                }}
              >
                <div className="gallery-content">
                  <div style={{ fontSize: "60px", marginBottom: "10px" }}>🏢</div>
                  <h5 style={{ fontWeight: "700" }}>Commercial Properties</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="gallery-item"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800')",
                }}
              >
                <div className="gallery-content">
                  <div style={{ fontSize: "60px", marginBottom: "10px" }}>✂️</div>
                  <h5 style={{ fontWeight: "700" }}>Tree & Shrub Care</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="gallery-item"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800')",
                }}
              >
                <div className="gallery-content">
                  <div style={{ fontSize: "60px", marginBottom: "10px" }}>💧</div>
                  <h5 style={{ fontWeight: "700" }}>Irrigation & Maintenance</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== CTA =================== */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Outdoor Space?</h2>
          <p>Get a free quote today and let's bring your vision to life!</p>
          <a href="tel:18764834938" className="btn btn-light btn-lg">
            📞 Call (876) 483-4938
          </a>
        </div>
      </section>

      {/* =================== CONTACT =================== */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We're here to help with all your landscaping needs
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h5>Phone</h5>
                <p>
                  <a href="tel:18764834938">(876) 483-4938</a>
                </p>
                <p>Call us anytime!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon">💬</div>
                <h5>WhatsApp</h5>
                <p>
                  <a href="https://wa.me/18764834938">(876) 483-4938</a>
                </p>
                <p>Message us instantly!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h5>Location</h5>
                <p>Main Street, Old Harbour</p>
                <p>Jamaica 🇯🇲</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5>GreenPro Landscaping</h5>
              <p className="mt-3">
                Transforming outdoor spaces across Jamaica since 2008
              </p>
              <p className="mt-4">
                <a href="tel:18764834938">📞 (876) 483-4938</a> |{" "}
                <a href="https://wa.me/18764834938">💬 WhatsApp</a>
              </p>
              <p className="mt-5">
                © 2026 GreenPro Landscaping. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* =================== WHATSAPP FLOAT =================== */}
      <a
        href="https://wa.me/18764834938?text=Hi!%20I'd%20like%20to%20book%20landscaping%20services."
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        💬
      </a>
    </>
  );
}

export default App;
