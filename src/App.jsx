import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, ExternalLink, Video, ChevronDown, Instagram, Twitter } from 'lucide-react';
import './App.css';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SkillBar = ({ skill, level }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-info">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="progress-bg">
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />
      </div>
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">IFEKA<span>MARY</span></div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Hello, I am</motion.h2>
          <motion.h1>Ifeka Mary</motion.h1>
          <motion.p>TV Producer | Content Creator | Creative Manager</motion.p>
          <motion.a 
            href="#portfolio" 
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <p>
                I am a multi-skilled <strong>TV producer, manager, content creator, and editor</strong> with a strong passion for storytelling and creative communication. My work blends production leadership with hands-on content development, allowing me to manage projects from concept to final delivery while maintaining a clear creative vision.
              </p>
              <p>
                Driven by growth and innovation, my goal is to expand my production capacity, build a strong collaborative team, and create impactful content that resonates with diverse audiences. I bring a balance of creativity, organization, and adaptability to every project, ensuring both artistic quality and professional execution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="project-grid">
            
            {/* Sudrex Ad Card */}
            <motion.div 
              className="project-card sudrex-card"
              whileHover={{ y: -10 }}
            >
              <div className="card-image-container">
                <img src="/sudrex-ad.jpg" alt="Sudrex Campaign" className="main-thumb" />
                <img src="/sudrex-logo.png" alt="Sudrex Logo" className="overlay-logo" />
                <div className="image-overlay">
                  <a href="https://www.facebook.com/SudrexNigeria/videos/954638474983445/?app=fbl" target="_blank" rel="noreferrer">
                    <ExternalLink color="white" size={40} />
                  </a>
                </div>
              </div>
              <div className="card-info">
                <h3>Sudrex Campaign – Role as Halima</h3>
                <p>Strategic advertising and character performance for a major pharmaceutical brand.</p>
              </div>
            </motion.div>

            {/* TikTok Card */}
            <motion.div 
              className="project-card"
              whileHover={{ y: -10 }}
            >
              <div className="card-image-container tiktok-bg">
                <Video color="#6C2BD9" size={60} />
                <div className="image-overlay">
                  <a href="https://tiktok.com/@shes_cguel1" target="_blank" rel="noreferrer">
                    <span className="btn-text">Visit @shes_cguel1</span>
                  </a>
                </div>
              </div>
              <div className="card-info">
                <h3>TikTok Content Creation</h3>
                <p>Engaging digital storytelling and audience interaction on social platforms.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Expertise</h2>
          <div className="skills-grid">
            <SkillBar skill="TV Production" level={95} />
            <SkillBar skill="Content Creation" level={90} />
            <SkillBar skill="Video Editing" level={85} />
            <SkillBar skill="Project Management" level={92} />
            <SkillBar skill="Creative Direction" level={88} />
            <SkillBar skill="Script Writing" level={80} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-item">
                <Mail color="#6C2BD9" />
                <p>joelynabah2019@gmail.com</p>
              </div>
              <div className="info-item">
                <Phone color="#6C2BD9" />
                <p>09165727483</p>
              </div>
            </div>
            
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ backgroundColor: "#5518b3", boxShadow: "0px 0px 15px rgba(108, 43, 217, 0.5)" }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">IFEKA<span>MARY</span></div>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          <div className="social-icons">
             <Instagram size={20} />
             <Twitter size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
