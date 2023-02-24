import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/Header';
import CardsDetails from './component/CardsDetails';
import Cards from './component/Cards';
import Italian from './component/Italian';
import FastFood from './component/FastFood';
import Desi from './component/Desi';
import Chineese from './component/Chineese';
import Biscuits from './component/Biscuits';

import {Routes,Route}from "react-router-dom"
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/cart/:id' element={<CardsDetails/>}/>
      <Route path='/chineese' element={<Chineese/>}/>
      <Route path='/FastFood' element={<FastFood/>}/>
      <Route path='/Desi' element={<Desi/>}/>
      <Route path='/italian' element={<Italian/>}/>
      <Route path='/Biscuits' element={<Biscuits/>}/>
    </Routes>
    </>
     
  );
}

export default App;
