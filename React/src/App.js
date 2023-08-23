import './App.css';
import {Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomerfrontPage from './components/newComp/CustomerfrontPage';
import SupplierfrontPage from './components/newComp/SupplierfrontPage';
import AdminfrontPage from './components/newComp/AdminfrontPage';
import HomePage from './components/newComp/HomePage';
import Ccarddbypass from './components/newComp/carddbypass';


function App() {
  return (
    <>
      <Routes>
      <Route exact path="/*" element={<HomePage/>}/>
      <Route exact path="/c/*" element={<CustomerfrontPage/>}/>
      <Route exact path="/s/*" element={<SupplierfrontPage/>}/>
      <Route exact path="/a/*" element={<AdminfrontPage/>}/>
    
      </Routes>

      </>
  );
}

export default App;
