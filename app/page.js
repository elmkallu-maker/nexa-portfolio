export default function Home() {
  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '80px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
        Elmeri Kallunki
      </h1>
      
      <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '1rem', fontWeight: 500 }}>
        Backend Engineer | Go | Systems Programming
      </p>

      <div style={{ marginBottom: '3rem', fontSize: '1.1rem', opacity: 0.85 }}>
        <p>📍 Helsinki, Finland</p>
        <p>📧 elmkallu@gmail.com | ☎️ +358 45 852 7318</p>
        <p>
          <a href="https://github.com/elmkallu-maker" 
             style={{color: 'white', textDecoration: 'underline', marginRight: '20px'}}
             target="_blank" rel="noopener noreferrer">
            💻 GitHub
          </a>
          <a href="https://linkedin.com/in/elmerikallunki" 
             style={{color: 'white', textDecoration: 'underline'}}
             target="_blank" rel="noopener noreferrer">
            🔗 LinkedIn
          </a>
        </p>
      </div>

      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '40px', 
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        marginBottom: '2rem',
        textAlign: 'left'
      }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>🚀 Featured Project</h2>
        
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          Concurrent Backend Server (Go)
        </h3>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Production-grade HTTP server demonstrating concurrent request handling with Go's 
          goroutines, atomic operations for lock-free metrics, graceful shutdown patterns, 
          and zero-downtime deployment.
        </p>
        
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://concurrent-backend-core.vercel.app/" 
             style={{
               background: 'rgba(255,255,255,0.2)',
               color: 'white',
               padding: '12px 24px',
               borderRadius: '8px',
               textDecoration: 'none',
               fontWeight: 600,
               display: 'inline-block'
             }}
             target="_blank" rel="noopener noreferrer">
            🌐 Live Demo
          </a>
          <a href="https://github.com/elmkallu-maker/concurrent-backend-core" 
             style={{
               background: 'rgba(255,255,255,0.2)',
               color: 'white',
               padding: '12px 24px',
               borderRadius: '8px',
               textDecoration: 'none',
               fontWeight: 600,
               display: 'inline-block'
             }}
             target="_blank" rel="noopener noreferrer">
            📂 View Code
          </a>
        </div>
      </div>

      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '40px', 
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>💻 Technical Skills</h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          textAlign: 'left',
          fontSize: '1.05rem'
        }}>
          <div>
            <strong>Backend:</strong><br/>
            Go, Concurrency<br/>
            REST APIs, HTTP<br/>
            Performance Optimization
          </div>
          <div>
            <strong>Systems:</strong><br/>
            Multithreading<br/>
            Atomic Operations<br/>
            Memory Management
          </div>
          <div>
            <strong>DevOps:</strong><br/>
            Git, CI/CD<br/>
            Docker<br/>
            Vercel, AWS
          </div>
          <div>
            <strong>Frontend:</strong><br/>
            Next.js, React<br/>
            TypeScript<br/>
            Full-Stack Context
          </div>
        </div>
      </div>

      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '40px', 
        borderRadius: '20px',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>📂 Other Projects</h2>
        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
          <p>
            <strong>✅ AI Content Production Pipeline</strong><br/>
            Real-time audio/video processing with multi-threaded architecture 
            and resource optimization for edge devices.
          </p>
          <p>
            <strong>✅ Full-Stack Portfolio</strong><br/>
            This site - built with Next.js, React, and automated CI/CD deployment on Vercel.
          </p>
        </div>
      </div>

      <footer style={{ marginTop: '4rem', opacity: 0.7, fontSize: '0.95rem' }}>
        <p><strong>Currently seeking:</strong> Backend Engineer opportunities</p>
        <p><strong>Specialization:</strong> Concurrent systems, performance optimization, on-device AI</p>
        <p style={{ marginTop: '2rem' }}>Built with Next.js • Deployed on Vercel</p>
      </footer>
    </div>
  )
}
