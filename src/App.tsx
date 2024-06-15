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
      <main className="w-full bg-bodyColor text-lightText font-bodyFont">
        <NavBar />

        <div className="container max-w-screen-xl mx-auto px-4">
          <Home />
          <Features />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
