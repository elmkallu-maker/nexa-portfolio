export default function Home() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        🎵 Elmeri Kallunki
      </h1>
      
      <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '3rem' }}>
        Music Producer & AI Content Creator
      </p>

      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '40px', 
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>🚀 Taidot</h2>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          fontSize: '1.2rem',
          lineHeight: '2'
        }}>
          <li>🎤 Musiikkituotanto (Suno AI)</li>
          <li>🎬 Video-sisällön luonti</li>
          <li>💻 Backend-kehitys (Go)</li>
          <li>🤖 AI-työkalut & Prompt Engineering</li>
        </ul>
      </div>

      <div style={{ 
        background: 'rgba(255,255,255,0.1)', 
        padding: '40px', 
        borderRadius: '20px',
        backdropFilter: 'blur(10px)'
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>📂 Projektit</h2>
        <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p>✅ Concurrent Backend API (Go + Vercel)</p>
          <p>✅ AI-musiikkivideoiden tuotanto</p>
          <p>✅ Digitaalisen sisällön automatisointi</p>
        </div>
      </div>

      <footer style={{ marginTop: '4rem', opacity: 0.7 }}>
        <p>📍 Helsinki, Finland</p>
        <p>Tehty Next.js:llä & deployattu Verceliin</p>
      </footer>
    </div>
  )
}
