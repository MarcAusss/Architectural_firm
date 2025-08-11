import Mainfooter from "../components/footer";
import Navbar from "../components/navbar";
import ProjectGridprojects from "../components/projectspage/gridprojects";
import ProjectHero from "../components/projectspage/hero";
import ProjectsProject1 from "../components/projectspage/project1";

export default function Projects() {
  return (
    <main>
        <Navbar/>

        <div className="relative">
          <ProjectHero/>
        </div>

        <div className="relative">
          <ProjectsProject1/>
        </div>


        <div className="relative mb-36">
          <ProjectGridprojects/>
        </div>

        <Mainfooter/>
    </main>
  )
}
