import React from 'react';
import { Calendar, Award, TrendingUp, Github, ExternalLink, Star, MapPin } from 'lucide-react';

// Experience Section Component
export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Sainsbury's Supermarkets",
      role: "Trading Assistant",
      duration: "Aug 2024 - Present",
      location: "Oxford, UK",
      logo: "🛒",
      highlights: [
        "Enhanced customer service delivery resulting in 10% sales increase",
        "Optimized product displays and inventory management",
        "Managed financial transactions and promotional activities"
      ]
    },
    {
      company: "Sukothai Restaurant",
      role: "Server (Customer Engagement Focus)",
      duration: "Jan 2024 - Jun 2024",
      location: "Leeds, UK",
      logo: "🍽️",
      highlights: [
        "Streamlined restaurant operations reducing costs by 15%",
        "Fostered teamwork environment increasing sales by 20%",
        "Delivered exceptional customer service experience"
      ]
    },
    {
      company: "Case New Holland (CNH)",
      role: "Supply Chain Associate",
      duration: "Jan 2022 - Nov 2022",
      location: "Noida, India",
      logo: "🚜",
      highlights: [
        "Reduced lead times by 10% through supply planning optimization",
        "Improved order fulfillment rate by 18%",
        "Enhanced parts availability and logistics coordination using Excel/Power BI"
      ]
    },
    {
      company: "Volvo Eicher Commercial Vehicles",
      role: "Production Assistant Intern",
      duration: "Jan 2021 - Dec 2021",
      location: "Bhopal, India",
      logo: "🚛",
      highlights: [
        "Implemented 5S and Kaizen practices achieving 25% efficiency improvement",
        "Reduced waste by 12% through barcode-based inventory tracking",
        "Supported quality audits and root cause analysis initiatives"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Progressive career journey across operations, supply chain, and customer-facing roles with 
            consistent track record of delivering measurable results.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-16 top-24 w-0.5 h-16 bg-blue-200 hidden md:block"></div>
              )}
              
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {exp.logo}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-1">{exp.role}</h3>
                        <div className="text-lg font-medium text-gray-700 mb-2">{exp.company}</div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <TrendingUp size={16} className="text-blue-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
export const ProjectsSection = () => {
  const projects = [
    {
      title: "SAE BAJA - All-Terrain Vehicle Development",
      role: "Team Head - Powertrain/Brakes/Drivetrain",
      duration: "2019-2022",
      description: "Led cross-functional team in designing, developing, and testing competition-ready all-terrain vehicle.",
      achievements: ["Led team of 15+ engineering students", "Successful vehicle competition participation"],
      technologies: ["CAD Design", "Project Management", "Team Leadership"],
      category: "Automotive Engineering",
      image: "🏎️"
    },
    {
      title: "AI Impact on Supply Chain Integration",
      role: "MSc Dissertation Research",
      duration: "2023-2024",
      description: "Comprehensive research on AI's role in accelerating supply chain innovation through data analytics.",
      achievements: ["Merit grade achievement", "Identified key AI applications in SCM"],
      technologies: ["AI/ML", "Data Analytics", "Supply Chain Management"],
      category: "Supply Chain Innovation",
      image: "🤖"
    },
    {
      title: "CNH Supply Chain Optimization",
      role: "Supply Chain Associate",
      duration: "Jan 2022 - Nov 2022",
      description: "Streamlined inbound supply chain processes, conducted supply planning using Excel and Power BI.",
      achievements: ["Reduced lead times by 10%", "Improved order fulfillment rate by 18%"],
      technologies: ["Excel", "Power BI", "Supply Planning"],
      category: "Supply Chain Management",
      image: "📊"
    },
    {
      title: "Volvo Eicher Process Improvement",
      role: "Production Assistant Intern",
      duration: "Jan 2021 - Dec 2021",
      description: "Implemented lean manufacturing principles including 5S and Kaizen practices on JIT assembly lines.",
      achievements: ["25% efficiency improvement", "12% waste reduction"],
      technologies: ["Lean Manufacturing", "5S", "Kaizen"],
      category: "Process Improvement",
      image: "⚙️"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing key projects demonstrating expertise in operations, supply chain management, 
            process improvement, and automotive engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    {project.image}
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium mb-1">{project.category}</div>
                    <div className="text-sm text-gray-500">{project.duration}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-blue-600 text-sm font-medium mb-3">{project.role}</p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Award size={14} className="text-blue-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/Kshitij20-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Operations & CI",
      icon: "⚙️",
      skills: ["Kaizen Implementation", "5S Methodology", "Six Sigma Basics", "KPI Tracking", "Process Optimization"]
    },
    {
      title: "Tools & Tech",
      icon: "💻",
      skills: ["Microsoft Excel", "Power BI", "CAD Software", "CRM Systems", "Inventory Management"]
    },
    {
      title: "Methods",
      icon: "📋",
      skills: ["Just-In-Time (JIT)", "Lean Manufacturing", "Supply Planning", "Quality Control", "Project Coordination"]
    },
    {
      title: "Leadership",
      icon: "👥",
      skills: ["Team Management", "Stakeholder Communication", "Cross-functional Collaboration", "Training & Mentoring"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">My Skill Book</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning operations management, supply chain optimization, 
            and continuous improvement methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{category.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-3xl font-light text-gray-900 mb-12 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">University of Leicester</h4>
                  <p className="text-sm text-gray-600">Leeds, United Kingdom</p>
                  <p className="text-xs text-gray-500">2023 – 2024</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>MSc Advanced Engineering Management (Merit)</strong><br />
                Dissertation: Impact of AI on Supply Chain Integration and Innovation. 
                Focused on AI applications in inventory management, quality control, and forecasting.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  🏛️
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">SRM Institute of Science & Technology</h4>
                  <p className="text-sm text-gray-600">Delhi-NCR, India</p>
                  <p className="text-xs text-gray-500">2018 – 2022</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>B.Tech Automobile Engineering (GPA: 3.4/4.0)</strong><br />
                Active participation in SAE BAJA, Mega ATV, and Enduro competitions. 
                Strong foundation in automotive systems and engineering principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// ---- Page wrapper that composes the sections ----
const PortfolioSections = () => {
  return (
    <>
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
};

export default PortfolioSections;
