import BlogPage from "../components/blogpage/blog";
import Mainfooter from "../components/footer";
import Navbar from "../components/navbar";

export default function Blog() {
  return (
    <main>
        <Navbar/>
        
        <div className="relative">
          <BlogPage/>
        </div>

        <Mainfooter/>
    </main>
  )
}
