import Rentalform from './components/Rentalform';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  RentalDashboard  from './components/RentalDashboard';
import RentalInfo from './components/RentalInfo';
import RentalChoice from './components/RentalChoice';
import RentalInfofromRent from './components/RentalInfofromRent';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Rentalform/>}/>
        <Route path='/dashboard' element={<RentalDashboard/>}/>
        <Route path='/choice' element={<RentalChoice/>}/>
        <Route path='/Service' element={<RentalInfo/>}/>
        <Route path='/Rent' element={<RentalInfofromRent/>}/>
      </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
