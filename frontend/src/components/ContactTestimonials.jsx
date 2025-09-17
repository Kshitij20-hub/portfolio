import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Star, ArrowUp } from 'lucide-react';

// Testimonials Section Component
export const TestimonialsSection = ({ testimonials, onSubmitTestimonial }) => {
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    role: '',
    company: '',
    message: '',
    rating: 5
  });

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    await onSubmitTestimonial(testimonialForm);
    setTestimonialForm({ name: '', role: '', company: '', message: '', rating: 5 });
  };

  const StarRating = ({ rating, onRatingChange, interactive = false }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={`${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What colleagues, supervisors, and clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials Display */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Feedback from Colleagues</h3>
            {testimonials.length > 0 ? (
              <div className="space-y-6">
                {testimonials.slice(0, 3).map((testimonial) => (
                  <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        {testimonial.company && (
                          <p className="text-xs text-gray-500">{testimonial.company}</p>
                        )}
                      </div>
                      <div className="ml-auto">
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">"{testimonial.message}"</p>
                    <p className="text-xs text-gray-400 mt-3">{testimonial.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <div className="text-6xl mb-4">💬</div>
                <p className="text-gray-500 mb-4">No testimonials yet</p>
                <p className="text-sm text-gray-400">Be the first to share your experience working with Kshitij!</p>
              </div>
            )}
          </div>

          {/* Testimonial Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Share Your Experience</h3>
            <form onSubmit={handleTestimonialSubmit} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={testimonialForm.name}
                    onChange={(e) => setTestimonialForm({...testimonialForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
                    <input
                      type="text"
                      value={testimonialForm.role}
                      onChange={(e) => setTestimonialForm({...testimonialForm, role: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Operations Manager"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={testimonialForm.company}
                      onChange={(e) => setTestimonialForm({...testimonialForm, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <StarRating 
                    rating={testimonialForm.rating} 
                    onRatingChange={(rating) => setTestimonialForm({...testimonialForm, rating})}
                    interactive={true}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Testimonial *</label>
                  <textarea
                    required
                    rows={4}
                    value={testimonialForm.message}
                    onChange={(e) => setTestimonialForm({...testimonialForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Share your experience working with Kshitij..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Submit Testimonial</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
export const ContactSection = ({ onSubmitContact }) => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    await onSubmitContact(contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Looking for opportunities in Operations, Supply Chain Management, or Process Improvement? 
            Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-5xl">📞</span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <a 
                    href="mailto:kshitijpandeybpl@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    kshitijpandeybpl@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <a 
                    href="tel:+447768942057"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +44 7768 942057
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-gray-600">Oxford, United Kingdom</div>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-green-800">Available for new opportunities</span>
              </div>
              <p className="text-sm text-green-700">
                Open to roles in Operations Management, Supply Chain, Process Improvement, 
                and Project Coordination.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleContactSubmit} className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about the opportunity or how I can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Kshitij Pandey</h3>
            <p className="text-blue-200 mb-4 leading-relaxed">
              Operations & Supply Chain Management Professional focused on process optimization, 
              continuous improvement, and delivering measurable results.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-blue-200">Available for opportunities</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-blue-200">
                <a href="mailto:kshitijpandeybpl@gmail.com" className="hover:text-white transition-colors">
                  kshitijpandeybpl@gmail.com
                </a>
              </p>
              <p className="text-blue-200">
                <a href="tel:+447768942057" className="hover:text-white transition-colors">
                  +44 7768 942057
                </a>
              </p>
              <p className="text-blue-200">Oxford, United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © {currentYear} Kshitij Pandey. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
