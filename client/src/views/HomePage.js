import Navbar from '../components/layout/navbar'
import LandingFrame from '../components/homepage/landingFrame'
import Posts from '../components/homepage/posts'
import Footer from "../components/layout/footer.js"

function HomePage() {
  return (
    <div className="Home">
      <Navbar />
      <LandingFrame />
      <Posts/>
      <Footer />
    </div>
  );
}

export default HomePage;