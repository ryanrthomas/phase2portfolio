import { useState } from 'react'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  
  const projects = [
    {
      id: 'rmlt',
      title: 'Rate My League Teammate (RMLT)',
      image: '/images/rmltSS.png',
      description: `This is my most recent personal project! If you're familiar with Rate My Professors then you already understand the basic idea behind this site. Essentially I wanted to create a community sourced forum about the teammates people encounter while playing League of Legends and allow future teammates to get a good idea of who they will be playing with.`,
      technologies: 'Python, JavaScript, SQL',
      github: 'https://github.com/ryanrthomas/rmlt',
      live: '#'
    },
    {
      id: 'pigebank',
      title: 'PigEBank',
      image: '/images/PigEBank.jpg',
      description: `This was my senior capstone project! The premise behind PigEBank is that it is a tool to aid parents/guardians in teaching their kids financial literacy.`,
      technologies: 'Swift, Firebase',
      github: 'https://github.com/ryanrthomas/pigebank',
      live: '#'
    },
    {
      id: 'pokedex',
      title: 'Pokédex',
      image: '/images/pokedex.png',
      description: `This is a basic Pokédex I made while learning basic JavaScript!`,
      technologies: 'HTML, CSS, JavaScript',
      github: 'https://github.com/ryanrthomas/pokedex',
      live: '#'
    }
  ]

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-normal mb-4">My Projects</h2>
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
                <h3 className="text-xl font-normal underline mb-2">{project.title}</h3>
                <p className="mb-2 text-xl">{project.description}</p>
                <p className="mb-2 text-xl"><strong>Technologies Used:</strong> {project.technologies}</p>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-green-600 underline">
                    GitHub Repository
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="text-blue-600 hover:text-green-600 underline">
                    Live Site
                  </a>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects