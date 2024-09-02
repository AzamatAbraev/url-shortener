import BoostSection from "./components/boost/BoostSection"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import HomeSection from "./components/home/HomeSection"
import StatisticsSection from "./components/statistics/StatisticsSection"

function App() {

  return (
    <div className="main">
      <Header />
      <HomeSection />
      <StatisticsSection />
      <BoostSection />
      <Footer />
    </div>
  )
}

export default App
