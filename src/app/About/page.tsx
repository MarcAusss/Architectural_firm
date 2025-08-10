import AboutLanding from "../components/aboutpage/landing";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <main>
        <Navbar/>
        
        <div className="relative">
          <AboutLanding/>
        </div>
    </main>
  )
}
