import React from "react";
import './App.css';

function App() {

const projects = [
  {
    id: 1,
    title: "Proprioceptive Tracking with KINARM",
    description: "Adapting continuous tracking from vision tasks to proprioception for efficient motor data collection. Reduced collection time from 30+ mins to under 3 mins.",
    languages: [{ name: "Python", color: "python" }, { name: "MATLAB", color: "python" }],
    stars: 12,
    forks: 3,
    mediaType: "image",
    mediaSrc: "https://via.placeholder.com/400x200/21262d/58a6ff?text=KINARM+Tracking"
  },
  {
    id: 2,
    title: "Tricuspid Valve MRI Segmentation",
    description: "Automated segmentation pipeline for tricuspid valves in cardiac MRIs, in collaboration with Oxford. Pending publication.",
    languages: [{ name: "Python", color: "python" }, { name: "MATLAB", color: "python" }],
    stars: 22,
    forks: 4,
    mediaType: "image",
    mediaSrc: "https://via.placeholder.com/400x200/21262d/58a6ff?text=MRI+Segmentation"
  },
  {
    id: 3,
    title: "Eclipse uProtocol Transport (Rust)",
    description: "Zero-copy shared-memory transport layer for connected vehicles using Iceoryx2 and Protobuf. Integrated into Eclipse ADAS stack.",
    languages: [{ name: "Rust", color: "nodejs" }, { name: "Protobuf", color: "js" }],
    stars: 44,
    forks: 11,
    mediaType: "image",
    mediaSrc: "https://via.placeholder.com/400x200/21262d/58a6ff?text=uProtocol+Rust"
  },
  {
    id: 4,
    title: "Zomato NLP Query Parser",
    description: "Low-latency NLP system to extract structured food-ordering intents using GLiNER and ONNX. Enhanced search relevance in production.",
    languages: [{ name: "Python", color: "python" }, { name: "ONNX", color: "python" }],
    stars: 35,
    forks: 6,
    mediaType: "image",
    mediaSrc: "https://via.placeholder.com/400x200/21262d/58a6ff?text=Zomato+NLP"
  },
  {
    id: 5,
    title: "Braille Score Converter",
    description: "Hackathon-winning tool converting music scores (PDFs or handwritten) into braille and MIDI using computer vision.",
    languages: [{ name: "Python", color: "python" }, { name: "OpenCV", color: "python" }],
    stars: 18,
    forks: 5,
    mediaType: "image",
    mediaSrc: "https://via.placeholder.com/400x200/21262d/58a6ff?text=Braille+Music"
  },
  {
    id: 6,
    title: "Astronaut Health Monitoring System",
    description: "Arduino-based prototype that analyzes astronaut excreta to detect health issues. Won special mention at HackCMU.",
    languages: [{ name: "Arduino", color: "js" }, { name: "C++", color: "js" }],
    stars: 28,
    forks: 7,
    mediaType: "image",
    mediaSrc: "https://via.placeholder.com/400x200/21262d/58a6ff?text=Space+Health"
  }
];

  return (
    <div className="github-container">
      {/* Top Navigation Bar */}
      <nav className="github-nav">
        <div className="nav-content">
          <div className="nav-left">
            <div className="icon">⚡</div>
            <div className="repo-path">
              <span className="username">Noella-Horo</span>
              <span className="separator">/</span>
              <span className="repo-name">portfolio</span>
            </div>
          </div>
          <div className="nav-right">
            <div className="repo-tabs">
            <button className="repo-tab">Home</button>
            <a href="/resume-noella.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="repo-tab"
            >
              Resume
            </a>
            <button className="repo-tab">Experience <span className="tab-count">6</span></button>
            <button className="repo-tab">Projects <span className="tab-count">5</span></button>
          </div>
          </div>
      
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="main-content">
        {/* README Section */}
        <div className="readme-section">
          <div className="readme-header">
            <span className="readme-icon">📄</span>
            <span className="readme-title">README</span>
          </div>
          <div className="readme-content">
            <div className="profile-section">
              <img
                src="/image.jpg"
                alt="Profile"
                className="profile-pic"
              />
              <p className="description">
  Hi! I'm a CS undergrad at Carnegie Mellon University (Class of 2027), passionate about machine learning, robotics, and systems.
  I’ve built zero-copy transport layers in Rust, NLP models for food tech, and even biomedical tools with Oxford researchers.
  I love solving hard problems and building cool stuff — from lunar mapping pipelines to braille music converters.
</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="about-section">
            <h3>About</h3>
            <p>A portfolio website showcasing my projects and experience</p>
            <div className="repo-topics">
              <span className="topic">ML</span>
              <span className="topic">NLP</span>
              <span className="topic">NER</span>
              <span className="topic">Computer Vision</span>
              <span className="topic">React</span>
              <span className="topic">Protobuf</span>
              <span className="topic">OpenCV</span>
              <span className="topic">ONNX</span>
              <span className="topic">TensorFlow</span>
              <span className="topic">Iceoryx2</span>
            </div>
          </div>
          
          <div className="sidebar-section">
          <h4>📊 Languages Used</h4>
          <div className="language-bars">
            <div className="language-entry">
              <div className="language-label">Python – 40%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill python" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="language-entry">
              <div className="language-label">Rust – 20%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill rust" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div className="language-entry">
              <div className="language-label">JavaScript – 15%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill js" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="language-entry">
              <div className="language-label">C/C++ – 10%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill java" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="language-entry">
              <div className="language-label">MATLAB – 10%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill matlab" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* Experience Section */}
        <section className="experience-section">
          <div className="experience-content">
            <div className="experience-header">
              <h2 className="experience-title">Featured Projects</h2>
              <span className="experience-count">{projects.length} repositories</span>
            </div>
            
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <span className="project-icon">📦</span>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-visibility">Public</span>
                  </div>
                  
                  <div className="project-media">
                    {project.mediaType === 'image' ? (
                      <img 
                        src={project.mediaSrc} 
                        alt={project.title}
                        className="project-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : project.mediaType === 'video' ? (
                      <video 
                        src={project.mediaSrc}
                        className="project-video"
                        controls
                        muted
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="media-placeholder" style={{display: 'none'}}>
                      🖼️
                    </div>
                  </div>
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div className="project-footer">
                    <div className="project-languages">
                      {project.languages.map((lang, index) => (
                        <div key={index} className="language-item">
                          <span className={`language-dot ${lang.color}`}></span>
                          <span>{lang.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="project-stats">
                      <div className="stat-item">
                        <span>⭐</span>
                        <span>{project.stars}</span>
                      </div>
                      <div className="stat-item">
                        <span>🍴</span>
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;