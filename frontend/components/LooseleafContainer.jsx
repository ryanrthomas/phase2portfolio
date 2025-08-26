const LooseleafContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4" 
         style={{ fontFamily: "'Just Me Again Down Here', cursive" }}>
      <div className="w-full max-w-4xl bg-white relative shadow-xl" 
           style={{
             backgroundImage: 'repeating-linear-gradient(transparent, transparent 29px, #9cb8e4 29px, #9cb8e4 30px)',
             paddingTop: '80px',
             paddingLeft: '50px',
             paddingRight: '20px',
             paddingBottom: '20px'
           }}>
        <div className="absolute w-0.5 h-full bg-red-500 top-0" style={{ left: '35px' }}></div>
        {children}
      </div>
    </div>
  )
}

export default LooseleafContainer