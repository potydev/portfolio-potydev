import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar - Fixed Left */}
      <Sidebar />
      
      {/* Main Content - Right Side */}
      <main className="ml-[40%] min-h-screen">
        <div className="max-w-4xl mx-auto px-8 lg:px-12 py-16">
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
