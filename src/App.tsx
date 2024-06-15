import NavBar from "./components/navBar"
import Home from './components/home'
import Features from "./components/features"
import Projects from "./components/projects"
import Resume from "./components/resume"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <NavBar />
        <Home />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
