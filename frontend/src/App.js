import React, { useState, useEffect } from 'react';
import './App.css';
import { Menu, X, Github, Mail, Phone, MapPin, Download, Send, Star, ExternalLink, ArrowDown, ArrowUp, Calendar, Award, TrendingUp } from 'lucide-react';
import { ExperienceSection, ProjectsSection, SkillsSection } from './components/PortfolioSections';
import { TestimonialsSection, ContactSection, Footer } from './components/ContactTestimonials';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load testimonials on component mount
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const response = await axios.get(`${API}/testimonials`);
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error loading testimonials:', error);
      // Keep empty array as fallback
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = async (formData) => {
    try {
      await axios.post(`${API}/contact`, formData);
      alert('Message sent successfully! I\'ll get back to you soon.');
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback to mailto
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:kshitijpandeybpl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  const handleTestimonialSubmit = async (formData) => {
    try {
      const response = await axios.post(`${API}/testimonials`, formData);
      setTestimonials([response.data, ...testimonials]);
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      // Add locally as fallback
      const newTestimonial = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString()
      };
      setTestimonials([newTestimonial, ...testimonials]);
      alert('Thank you for your feedback!');
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-blue-900 hover:text-blue-700 cursor-pointer transition-colors"
                 onClick={() => scrollToSection('hero')}>
              KP
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className={`text-sm font-medium transition-colors hover:-translate-y-0.5 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t shadow-lg">
              <nav className="flex flex-col p-4 space-y-4">
                {['About', 'Experience', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <MapPin size={16} />
              Oxford, United Kingdom
            </div>

            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight mb-6">
              Hey, there 👋
              <br />
              <span className="text-4xl lg:text-6xl">I'm <strong className="font-bold text-blue-900">Kshitij Pandey</strong></span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 font-light mb-6">
              Operations & Supply Chain Management | Process Improvement | AI-Aware Professional
            </p>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-2xl">
              Operations and Supply Chain professional with AI-aware continuous improvement mindset. 
              Proven experience in process optimization, stakeholder communication, and customer-facing 
              roles across automotive and retail sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Kshitij20-hub" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Github className="text-blue-600" size={20} />
              </a>
              <a href="mailto:kshitijpandeybpl@gmail.com"
                 className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                <Mail className="text-blue-600" size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <div className="text-lg font-semibold text-gray-900">Operations Expert</div>
                  <div className="text-sm text-gray-600">Supply Chain & Process Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 text-blue-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-gray-600">Max Efficiency Gain</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">18%</div>
              <div className="text-gray-600">Fulfillment Improvement</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">Merit</div>
              <div className="text-gray-600">MSc Grade</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <div className="text-8xl">👨‍🎓</div>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm Kshitij Pandey, an Operations & Supply Chain professional with 5+ years of experience 
                in process optimization, continuous improvement, and stakeholder management. I hold an MSc 
                in Advanced Engineering Management from Leeds Beckett University with Merit grade, specializing 
                in AI's impact on supply chain integration.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My expertise spans Kaizen implementation, 5S methodology, JIT systems, and data-driven 
                decision making using tools like Excel, Power BI, and various CRM systems. I've consistently 
                delivered measurable results across automotive, retail, and manufacturing sectors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently based in Oxford, UK, I'm passionate about leveraging AI and technology to 
                revolutionize traditional supply chain operations while maintaining focus on customer 
                satisfaction and operational excellence.
              </p>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '📊', title: 'Data Analysis', desc: 'Excel, Power BI, KPI tracking and reporting for operational insights' },
              { icon: '⚙️', title: 'Process Improvement', desc: 'Lean, Kaizen, 5S implementation for operational excellence' },
              { icon: '🚚', title: 'Supply Chain', desc: 'Planning, forecasting, inventory management and logistics coordination' },
              { icon: '👥', title: 'Leadership', desc: 'Team coordination, stakeholder management and project leadership' }
            ].map((strength, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{strength.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{strength.title}</h3>
                <p className="text-sm text-gray-600">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection 
        testimonials={testimonials} 
        onSubmitTestimonial={handleTestimonialSubmit} 
      />
      <ContactSection onSubmitContact={handleContactSubmit} />
      <Footer />
    </div>
  );
}

export default App;
