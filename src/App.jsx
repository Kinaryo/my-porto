import styles from "./App.module.css"
import { Hero } from "./components/hero/hero"
import { Navbar } from "./components/navbar/Navbar"
import { About} from "./components/about/About"
import { Experience } from "./components/experience/experience"
import { Projects } from "./components/projects/Projects"
import { Contact } from "./components/contact/Contact"
import { Sertifikat } from "./components/sertifikat/Sertifikat"

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Sertifikat/>
      <Projects/>
      <Contact/>
      </div>
  )
}

export default App
