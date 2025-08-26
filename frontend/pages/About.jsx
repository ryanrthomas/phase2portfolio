import { useState } from 'react'

const About = () => {
  const games = [
    { name: 'League of Legends', image: '/images/leagueOfLegends.jpg' },
    { name: 'Apex Legends', image: '/images/apexLegends.jpg' },
    { name: 'Valorant', image: '/images/valorant.jpg' },
    { name: 'Marvel Rivals', image: '/images/marvelRivals.jpg' },
    { name: 'Black Ops 6', image: '/images/blackOps6.jpg' }
  ]

  return (
    <section className="mt-4">
      <h2 className="text-xl font-normal mb-2">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        I am a 24 year old recent college graduate. I graduated with a Bachelor of Arts in Computer Science in May 2023.
        I like to play video games, watch anime, read manga, and go bowling. I mainly like to play PvP games, more specifically:
      </p>
      
      <div className="flex justify-between items-end gap-2 mb-4">
        {games.map((game, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={game.image} alt={game.name} 
                 className="w-20 h-32 object-cover mb-1 border border-gray-300" />
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
  )
}

export default About