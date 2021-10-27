import Navbar from '../components/layout/navbar'
import LandingFrame from '../components/homepage/landingFrame'
// import Footer from "../components/layout/footer.js"

function HomePage() {
  return (
    <div className="Home">
      <Navbar />
      <LandingFrame />
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;