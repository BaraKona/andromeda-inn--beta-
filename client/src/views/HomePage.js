import Navbar from '../components/layout/newNavbar'
import Home from '../components/homepage/newHome'
import Posts from '../components/homepage/posts'
import Footer from "../components/layout/footer.js"

function HomePage() {
  return (
    <div className="Home">
      <Navbar />
      <Home />
      <Posts/>
    </div>
  );
}

export default HomePage;