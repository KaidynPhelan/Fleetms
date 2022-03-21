import MainPage from "./components/MainPage/MainPage.js";
import VehiclePage from "./components/pages/VehiclePage.js";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainNavigation from "./components/MainPage/MainNavigation.js";
import './reset.css';


function App() {
  return (
    <div>
      
      <Router>
      <MainNavigation />
        <Routes>
          <Route index element = {<MainPage />} />
          <Route path="/:id" element = {<VehiclePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
