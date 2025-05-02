import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Brain, FlaskRound as Flask, Microscope, GraduationCap, Mail, Github, Linkedin, FileText } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { CourseCard } from './components/CourseCard';
import { CertificationCard } from './components/CertificationCard';
import { ProjectPage } from './pages/ProjectPage';
import { projects } from './data/projects';
import { coursework } from './data/coursework';
import { certifications } from './data/certifications';

function App() {
  const location = useLocation();
  
  if (location.pathname.startsWith('/projects/')) {
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/bolt_eng_port/images/Sen_Des_Pic.jpg" 
            alt="Carlos Alvarez"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 to-blue-900/80"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="flex items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
              <img 
                src="/bolt_eng_port/images/Alvarez_Carlos_profile.jpg" 
                alt="Carlos Alvarez"
                className="w-full h-full object-contain scale-100"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Carlos Alvarez
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Biomedical Engineer
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
                  Contact Me
                </a>
                <a href="#projects" className="border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition text-white">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Highly analytical and detail-oriented Biomedical Engineering graduate from Florida International University with a proven track record in both pharmaceutical formulation and medical device design. My dual background in Biomedical and Electrical Engineering, coupled with practical experience leading formulation development and designing innovative medical devices, allows me to bridge the gap between scientific principles and real-world applications. I excel at problem-solving, leveraging my expertise in areas such as biomechanics, biomaterials, circuit analysis, and signal processing to develop effective and safe solutions. I am adept at collaborating within multidisciplinary teams, communicating technical information clearly, and ensuring adherence to quality and regulatory standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Brain className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">Neural Engineering</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Flask className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">Biomaterials</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Microscope className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">Cell Culture</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <GraduationCap className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Senior Design Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                image={project.image}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coursework Section */}
      <section id="coursework" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Relevant Coursework</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursework.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} certification={certification} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <FileText className="w-6 h-6" />
              </a>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Carlos Alvarez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;