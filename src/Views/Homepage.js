// import Three from '../Components/three'
import Navbar from '../Components/layout/navbar'
import LandingFrame from '../Components/Homepage/landingFrame'

function HomePage() {
  return (
    <div className="Home">
      <Navbar />
      {/* <Three /> */}
      <LandingFrame />
    </div>
  );
}

export default HomePage;