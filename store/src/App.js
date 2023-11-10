import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import InvitationSuppliers from './Components/InvitationSuppliers/InvitationSuppliers';
import Cooperation from "./Components/Cooperation/Cooperation"
import FAQ from "./Components/FAQ/FAQ"
import Reviews from "./Components/Reviews/Reviews"
import Stock from "./Components/Stock/Stock"
import AboutStore from "./Components/AboutStore/AboutStore"
import PushApplication from "./Components/PushApplication/PushApplication"

function App() {
  return (
    <main className='App'>
      <MainPage/>
      <AboutStore/>
      <Stock/>
      <Reviews/>
      <FAQ/>
      <Cooperation/>
      <InvitationSuppliers/>
      <Footer/>
      <PushApplication/>
    </main>
  );
}

export default App;
