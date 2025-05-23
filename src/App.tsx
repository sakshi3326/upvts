import { Routes, Route } from 'react-router-dom'
import VisitorRegistration from './components/VisitosRegistration';
import Home from './components/Home';
import About from './components/About';
import ExhibitorRegistration from './components/ExhibitorRegistration';
// import ViewExhibitors from './components/AdminDashboard';
import ExhibitorsInfoPage from './components/ExhibitorInfoPage';
// import Flyer from './components/Flyer';
import VisitorsInfoPage from './components/VisitorInfoPage';
import VisitorDirection from './components/VisitorsDirection';
import Contact from './components/Contact';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/exhibitor-registration" element={<ExhibitorRegistration />} />
      
      <Route path="/exhibitors/why-exhibit" element={<ExhibitorsInfoPage />} />
      
      <Route path="/exhibitorsList" element={<ViewExhibitors />} /> */}
            <Route path="/about" element={<About/>} />
            <Route path="/exhibitor-registration" element={<ExhibitorRegistration/>} />
            <Route path="/exhibitors/why-exhibit" element={<ExhibitorsInfoPage/>} />
            <Route path="/visitors/why-visit" element={<VisitorsInfoPage/>} />
            <Route path="/visitors/registration" element={<VisitorRegistration />} />
            <Route path="/visitors/schedule" element={<VisitorDirection/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* <Route path="/exhibitors/flyer" element={<Flyer/>} /> */}

    </Routes>
  )
}

export default App;
