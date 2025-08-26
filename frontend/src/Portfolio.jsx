import React, { useState } from 'react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is just a demo)');
    setFormData({ firstName: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 'rmlt',
      title: 'Rate My League Teammate (RMLT)',
      image: '/images/rmltSS.png',
      description: `This is my most recent personal project! If you're familiar with Rate My Professors then you already understand the basic idea behind this site. Essentially I wanted to create a community sourced forum about the teammates people encounter while playing League of Legends and allow future teammates to get a good idea of who they will be playing with.`,
      technologies: 'Python, JavaScript, SQL'
    },
    {
      id: 'pigebank',
      title: 'PigEBank',
      image: '/images/PigEBank.jpg',
      description: `This was my senior capstone project! The premise behind PigEBank is that it is a tool to aid parents/guardians in teaching their kids financial literacy.`,
      technologies: 'Swift, Firebase'
    },
    {
      id: 'pokedex',
      title: 'Pokédex',
      image: '/images/pokedex.png',
      description: `This is a basic Pokédex I made while learning basic JavaScript!`,
      technologies: 'HTML, CSS, JavaScript'
    }
  ];

  const games = [
    { name: 'League of Legends', image: '/images/leagueOfLegends.jpg' },
    { name: 'Apex Legends', image: '/images/apexLegends.jpg' },
    { name: 'Valorant', image: '/images/valorant.jpg' },
    { name: 'Marvel Rivals', image: '/images/marvelRivals.jpg' },
    { name: 'Black Ops 6', image: '/images/blackOps6.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4" style={{ fontFamily: "'Just Me Again Down Here', cursive" }}>
      {/* Looseleaf Paper Container */}
      <div className="w-full max-w-4xl bg-white relative shadow-xl" 
           style={{
             backgroundImage: 'repeating-linear-gradient(transparent, transparent 29px, #9cb8e4 29px, #9cb8e4 30px)',
             paddingTop: '80px',
             paddingLeft: '50px',
             paddingRight: '20px',
             paddingBottom: '20px'
           }}>
        
        {/* Red margin line */}
        <div className="absolute w-0.5 h-full bg-red-500 top-0" style={{ left: '35px' }}></div>
        
        {/* Header with white background strip */}
        <header className="fixed top-0 left-0 w-full z-40 bg-white shadow-sm border-b border-gray-200">
          <nav className="flex items-baseline justify-center gap-6 py-3 text-lg" style={{ fontFamily: "'Just Me Again Down Here', cursive" }}>
            <button onClick={() => scrollToSection('home')} className="hover:text-green-600 transition-colors px-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about-me')} className="hover:text-green-600 transition-colors px-2">
              About Me
            </button>
            <h1 className="text-xl font-normal mx-6">My Showcase</h1>
            <button onClick={() => scrollToSection('my-projects')} className="hover:text-green-600 transition-colors px-2">
              My Projects
            </button>
            <button onClick={() => scrollToSection('contact-me')} className="hover:text-green-600 transition-colors px-2">
              Contact Me
            </button>
          </nav>
        </header>

        {/* Home Section */}
        <section id="home" className="flex items-start gap-3 mb-6">
          <img src="/images/IMG_0636.jpg" alt="Ryan Thomas" className="w-42 h-42 object-cover flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-xl font-normal mb-2" style={{ marginTop: '-5px' }}>Ryan Thomas - A Software Engineer*</h2>
            <p className="text-lg leading-relaxed">
              Hi, my name is Ryan Thomas, an aspiring* software engineer from The Bronx.<br/>
              Explore my page if you would like to learn more about me!
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about-me" className="mb-8">
          <h2 className="text-xl font-normal mb-2">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I am a 24 year old recent college graduate. I graduated with a Bachelor of Arts in Computer Science in May 2023.
            I like to play video games, watch anime, read manga, and go bowling. I mainly like to play PvP games, more specifically:
          </p>
          
          {/* Game Cards Row */}
          <div className="flex justify-between items-end gap-2 mb-4">
            {games.map((game, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={game.image} alt={game.name} className="w-20 h-32 object-cover mb-1 border border-gray-300" />
                <p className="text-sm text-center leading-tight">{game.name}</p>
              </div>
            ))}
          </div>

          <p className="text-lg leading-relaxed mb-4">
            but I also find myself playing Civilization VI from time to time!<br/>
            Outside of games, I like to collect manga and as of typing this, Jujutsu Kaisen makes up most of my collection.
            Recently I've been watching Rurouni Kenshin, Re:Zero, and Solo Leveling, and if I had to choose an all time favorite
            I would choose...¯\_(ツ)_/¯
          </p>

          {/* Skills and Resume */}
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-normal underline">Skills</h3>
              <p className="text-lg leading-relaxed">
                I'm familiar with Python, JavaScript, and SQL, but I am looking to expand and develop my skill-set through IF!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal underline">Resume</h3>
              <p className="text-lg leading-relaxed">
                Here's the link to <a href="#" className="text-blue-600 hover:text-green-600 underline" target="_blank">my resume</a>!
              </p>
            </div>
          </div>
        </section>

        {/* My Projects Section */}
        <section id="my-projects" className="mb-8">
          <h2 className="text-xl font-normal mb-4">My Projects</h2>
          <div className="flex gap-3 mb-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                className="border border-gray-400 hover:shadow-md transition-shadow bg-white"
              >
                <img src={project.image} alt={project.title} className="w-42 h-42 object-cover block" />
              </button>
            ))}
          </div>
          
          {activeProject && (
            <div className="text-lg leading-relaxed mb-6">
              {projects.map((project) => (
                activeProject === project.id && (
                  <div key={project.id}>
                    <h3 className="text-lg font-normal underline mb-2">{project.title}</h3>
                    <p className="mb-2">{project.description}</p>
                    <p><strong>Technologies Used:</strong> {project.technologies}</p>
                  </div>
                )
              ))}
            </div>
          )}
        </section>

        {/* Contact Me Section */}
        <section id="contact-me">
          <h2 className="text-xl font-normal mb-4">Contact Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-2">
                <i className="fab fa-linkedin text-blue-700 text-lg"></i>
                <a href="https://www.linkedin.com/in/ryan-thomas-19a419197/" className="hover:text-green-600 transition-colors">
                  Connect with me on LinkedIn!
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fab fa-github text-gray-900 text-lg"></i>
                <a href="https://github.com/ryanrthomas" className="hover:text-green-600 transition-colors">
                  My GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fab fa-discord text-indigo-600 text-lg"></i>
                <span>My Discord: Ryaiu</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <i className="fa-solid fa-envelope text-red-600 text-lg"></i>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-lg mb-1">First Name</div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    placeholder="Johnny Bravo"
                    className="w-full p-1 border-b border-gray-400 bg-transparent text-lg focus:outline-none focus:border-gray-600"
                    style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
                  />
                </div>
                <div>
                  <div className="text-lg mb-1">Email Address</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="emailaddress@example.com"
                    className="w-full p-1 border-b border-gray-400 bg-transparent text-lg focus:outline-none focus:border-gray-600"
                    style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
                  />
                </div>
                <div>
                  <div className="text-lg mb-1">Message</div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Enter message here..."
                    rows="4"
                    className="w-full p-1 border border-gray-400 bg-transparent text-lg focus:outline-none focus:border-gray-600 resize-none"
                    style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
                  />
                </div>
                <button
                  onClick={handleFormSubmit}
                  className="bg-blue-600 text-white px-4 py-2 text-lg hover:bg-blue-700 transition-colors"
                  style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;