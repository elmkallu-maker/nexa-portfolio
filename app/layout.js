export const metadata = {
  title: 'Elmeri Kallunki - Portfolio',
  description: 'Music Producer & AI Content Creator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body style={{ 
        margin: 0, 
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        color: 'white'
      }}>
        {children}
      </body>
    </html>
  )
}
