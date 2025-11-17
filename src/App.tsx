import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/index';
import './App.css';
import WhoWeAre from './pages/whoweare';
import OurJourney from './pages/OurJourney';
import VisionMissionSpirit from './pages/VisionMission';
import BoardOfDirectors from './pages/Board';
import SeniorManagement from './pages/SeniorManagement';
import Videos from './pages/Videos';
import Photos from './pages/Photo';
import NewsAndStories from './pages/NewsAndStories';
import Publications from './pages/Publications';
import Reports from './pages/Reports';
import Events from './pages/Events';
import Newsletters from './pages/NewsLetters';
import AlbumGallery from './pages/album';
import Donate from './pages/donate';
import PaymentSuccess from './components/payments/paymentsuccess';
import ContactUs from './pages/contact';
import Jobs from './pages/Volunteers';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/our-journey" element={<OurJourney />} />
            <Route path="/about/vision-mission" element={<VisionMissionSpirit />} />
            <Route path="/governance/board" element={<BoardOfDirectors />} />
            <Route path="/governance/management" element={<SeniorManagement />} />
            <Route path="/media/videos" element={<Videos />} />
            <Route path="/media/gallery" element={<Photos />} />
            <Route path="/knowledge/news" element={<NewsAndStories />} />
            <Route path="/knowledge/publications" element={<Publications />} />
            <Route path="/knowledge/reports" element={<Reports />} />
            <Route path="/knowledge/newsletters" element={<Newsletters />} />
            <Route path="/album" element={<AlbumGallery />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/knowledge/events" element={<Events />} />
              <Route path="/contact" element={<ContactUs />} />
               <Route path="/opportunities/jobs" element={<Jobs />} />
              
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;