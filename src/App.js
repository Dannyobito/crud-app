import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetail from './EmpDetail'

const App = () => {
  return (
    <div className="App">
      <h1>React CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing/>}></Route>
          <Route path='/employee/create' element={<EmpCreate/>}></Route>
          <Route path='/employee/detail/:employeeid' element={<EmpDetail/>}></Route>
          <Route path='/employee/edit/:employeeid' element={<EmpEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
    
  );

}

export default App;
