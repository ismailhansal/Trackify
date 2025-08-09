import React from 'react'

const Chatbot = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <iframe
        src="http://localhost:8501"  // Remplace par l'URL de ton application Streamlit
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  )
}

export default Chatbot