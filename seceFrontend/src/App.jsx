import { useState } from 'react';
import './App.css';
import Home from './components/FunctionalComponents/Home';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/Gallery';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/FunctionalComponents/Signup';
import Login from './components/FunctionalComponents/Login';
import UseState from './components/FunctionalComponents/Hooks/UseState';
import UseEffect from './components/FunctionalComponents/Hooks/UseEffect';
import UseEffectAPI from './components/FunctionalComponents/Hooks/UseEffectAPI';
import UseReducer from './components/FunctionalComponents/Hooks/UseReducer';
import UseEffectAPIimage from './components/FunctionalComponents/Hooks/UseEffectAPIimage'
import UseRef from './components/FunctionalComponents/Hooks/UseRef'
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo'
import UseCallback from './components/FunctionalComponents/Hooks/UseCallback';
import ReactLifecycle from './components/classComponents/ReactLifecycle';
import ClassCompEG from './components/classComponents/ClassCompEG';
import UseContext from './components/FunctionalComponents/Hooks/UseContext';
import Memo from './components/FunctionalComponents/Memoization/Memo'
import LazyLoading from './components/FunctionalComponents/Memoization/LazyLoading';
import UseLocalStorage from './components/FunctionalComponents/Hooks/UseLocalStorage';
import HoC from './components/FunctionalComponents/HoC/HoC';
import Dtoggle from './components/FunctionalComponents/Hooks/CustomHooks/Dtoggle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
          <Routes>
          <Route path="/login"element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path="/" element={<Signup/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery page="Gallery" img="time" />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/usestate" element={<UseState />} />
              <Route path="/useeffect" element={<UseEffect />} />
              <Route path="/useapi" element={<UseEffectAPI/>}/>
              <Route path="/usered" element={<UseReducer />} />
              <Route path="/useimg" element={<UseEffectAPIimage/>} />
              <Route path="/useref" element={<UseRef/>}/>
              <Route path="/usememo" element={<UseMemo/>} />
              <Route path="/usecall" element={<UseCallback/>} />
              <Route path="/usecon" element={<UseContext/>}/>
              <Route path="/memo" element={<Memo/>} />
              <Route path="/lazy" element={<LazyLoading/>} />
              <Route path="/reactlm" element={<ReactLifecycle/>}/>
              <Route path="/fun-in-class" element={<ClassCompEG/>}/>
              <Route path="/uselocal" element={<UseLocalStorage/>}/>
              <Route path="/hoc" element={<HoC/>}/>
              <Route path="/cushook" element={<Dtoggle/>}/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
