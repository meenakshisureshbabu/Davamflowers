import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import StringFlowers from './components/StringFlowers/StringFlowers';
import PoojaFlowers from './components/Pooja/PoojaFlowers';
import RoseGarlands from './components/Rose/RoseGarlands';
import Veni from './components/Veni/Veni';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StringFlowers/>}/>
        <Route path='/stringflowers' element={<StringFlowers/>}/>
        <Route path='/poojaflowers' element={<PoojaFlowers/>}/>
        <Route path='/rosegarlands' element={<RoseGarlands/>}/>
        <Route path='/veni' element={<Veni/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
