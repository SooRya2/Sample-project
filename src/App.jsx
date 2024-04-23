import Rentalform from './components/Rentalform';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  RentalDashboard  from './components/RentalDashboard';
import RentalInfo from './components/RentalInfo';
import RentalChoice from './components/RentalChoice';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Rentalform/>}/>
        <Route path='/dashboard' element={<RentalDashboard/>}/>
        <Route path='/choice' element={<RentalChoice/>}/>
      </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
