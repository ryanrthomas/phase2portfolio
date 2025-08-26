import { Link } from 'react-router-dom'

const Home = () => {
  const quickStats = [
    { label: "Latest JJK Volume Purchased", value: "24" },
    { label: "Peak League Rank", value: "Diamond IV" },
    { label: "Technologies", value: "6+" },
    { label: "Matcha Consumed", value: "∞" }
  ]

  const featuredSkills = [
    "Python", "JavaScript", "React", "SQL", "Git", "Problem Solving"
  ]

  return (
    <section className="mt-4">
      {/* Main Intro Section */}
      <div className="flex items-start gap-4 mb-8">
        <img src="/images/IMG_0636.jpg" alt="Ryan Thomas"
             className="w-32 h-32 object-cover flex-shrink-0 border border-gray-300" />
        <div className="flex-1">
          <h2 className="text-xl font-normal mb-3">Ryan Thomas - A Software Engineer*</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi, my name is Ryan Thomas, an aspiring* software engineer from The Bronx.<br/>
            I'm passionate about creating digital solutions and turning ideas into reality through code.
          </p>
          <div className="flex gap-4">
            <Link to="/projects" 
                  className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors text-lg">
              View My Work
            </Link>
            <Link to="/contact"
                  className="border border-blue-600 text-blue-600 px-4 py-2 hover:bg-blue-50 transition-colors text-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mb-8">
        <h3 className="text-lg font-normal underline mb-3">Quick Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center p-3 border border-gray-300 bg-gray-50">
              <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: "'Just Me Again Down Here', cursive" }}>
                {stat.value}
              </div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Focus */}
      <div className="mb-8">
        <h3 className="text-lg font-normal underline mb-3">Currently...</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">🎯 Learning</h4>
            <p className="text-lg">Expanding my skillset through intensive coding bootcamp and building real-world applications.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🚀 Building</h4>
            <p className="text-lg">Working on exciting projects including a League of Legends community platform and financial literacy tools.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">🎮 Playing</h4>
            <p className="text-lg">Dominating in League of Legends, Valorant, and the latest Marvel Rivals when I need a break from coding.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">📚 Reading</h4>
            <p className="text-lg">Collecting and reading manga, currently obsessed with Jujutsu Kaisen and catching up on Solo Leveling.</p>
          </div>
        </div>
      </div>

      {/* Featured Skills */}
      <div className="mb-8">
        <h3 className="text-lg font-normal underline mb-3">Core Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {featuredSkills.map((skill, index) => (
            <span key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 text-sm border border-blue-200">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 p-6 border border-gray-300">
        <h3 className="text-lg font-normal mb-3">Let's Connect!</h3>
        <p className="text-lg leading-relaxed mb-4">
          I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology, gaming, or anime. 
          Feel free to explore my work and reach out!
        </p>
        <div className="flex gap-4">
          <Link to="/about" className="text-blue-600 hover:text-green-600 underline text-lg">
            Learn More About Me →
          </Link>
          <a href="https://github.com/ryanrthomas" target="_blank" rel="noopener noreferrer"
             className="text-blue-600 hover:text-green-600 underline text-lg">
            Check Out My GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home