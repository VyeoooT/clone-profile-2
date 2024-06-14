import NavBar from "./components/navBar"
import Home from './components/home'
import Features from "./components/features"
import Projects from "./components/projects"
import Resume from "./components/resume"

function App() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <NavBar />
        <Home />
        <Features />
        <Projects />
        <Resume />
      </div>
    </>
  )
}

export default App
