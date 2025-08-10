import AboutPageAbout from "../components/aboutpage/about";
import AboutLanding from "../components/aboutpage/landing";
import AboutTeam from "../components/aboutpage/team";
import Mainfooter from "../components/footer";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <main>
        <Navbar/>
        
        <div className="relative">
          <AboutLanding/>
        </div>


        <div className="relative">
          <AboutPageAbout/>
        </div>

        <div className="relative">
          <AboutTeam/>
        </div>

        <Mainfooter/>
    </main>
  )
}
