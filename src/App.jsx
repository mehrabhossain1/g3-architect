import './App.css'
import Features from './sections/Features'
import Header from './sections/Header'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      {/* header section */}
      <div style={{ backgroundColor: 'rgba(255, 144, 14, 0.1)' }}>
        <Header />
        <Hero />
      </div>
      {/* features section */}
      <Features />
    </>
  )
}

export default App
