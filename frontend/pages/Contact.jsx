import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  })

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // This would be where you integrate with a service like Netlify Forms or EmailJS
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ firstName: '', email: '', message: '' })
  }

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-normal mb-4">Contact Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 text-lg">
          <div className="flex items-center gap-2">
            <i className="fab fa-linkedin text-blue-700 text-lg"></i>
            <a href="https://www.linkedin.com/in/ryan-thomas-19a419197/" 
               className="hover:text-green-600 transition-colors">
              Connect with me on LinkedIn!
            </a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-github text-gray-900 text-lg"></i>
            <a href="https://github.com/ryanrthomas" 
               className="hover:text-green-600 transition-colors">
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
            <span className="text-lg">Send me a message</span>
          </div>
          <form onSubmit={handleFormSubmit} className="space-y-3">
            <div>
              <label className="text-lg mb-1 block">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                placeholder="Johnny Bravo"
                className="w-full p-1 border-b border-gray-400 bg-transparent text-lg focus:outline-none focus:border-gray-600"
                style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
                required
              />
            </div>
            <div>
              <label className="text-lg mb-1 block">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="emailaddress@example.com"
                className="w-full p-1 border-b border-gray-400 bg-transparent text-lg focus:outline-none focus:border-gray-600"
                style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
                required
              />
            </div>
            <div>
              <label className="text-lg mb-1 block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Enter message here..."
                rows="4"
                className="w-full p-1 border border-gray-400 bg-transparent text-lg focus:outline-none focus:border-gray-600 resize-none"
                style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 text-lg hover:bg-blue-700 transition-colors"
              style={{ fontFamily: "'Just Me Again Down Here', cursive" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact