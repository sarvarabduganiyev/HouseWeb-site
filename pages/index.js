import Navbar from '../public/Navbar';
import MainHousebg from '../components/mainComponent/MainHousebg';
import BookNow from '../components/mainComponent/BookNow';
import TheGuest from '../components/mainComponent/TheGuest';
import SleepingArrangements from '../components/mainComponent/SleepingArrangements';
import ThePerfect from '../components/mainComponent/ThePerfect';
// import Carusel from '../components/mainComponent/Carusel';
import WifiPage from '../components/mainComponent/wifiPage';
import WereAlreadyComponent from '../components/mainComponent/WereAlready';
import Footer from '../components/mainComponent/Footer';



function IndexPage() {

  return (
    <div>
      <Navbar />
      <MainHousebg />
      <BookNow />
      <TheGuest />
      <SleepingArrangements />
      <ThePerfect />
      {/* <Carusel /> */}
      <WifiPage />
      <WereAlreadyComponent />
      <Footer />
    </div>
  )
}



export default IndexPage;