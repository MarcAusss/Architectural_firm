"use client";

import HomeAbout from "./components/homepage/about";
import HomeLanding from "./components/homepage/landing";
import ProjectLanding from "./components/homepage/project";
import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div className="h-[100vh] relative">
        <HomeLanding />
      </div>

      <div className="relative">
        <HomeAbout/>
      </div>

      <div className="relative">
        <ProjectLanding/>
      </div>
    </main>
  );
}
