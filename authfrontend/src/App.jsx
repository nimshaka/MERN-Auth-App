import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import SingIn from './Pages/Singin';
import SingUp from './Pages/Singup';
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sing-in" element={<SingIn />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> 
    </BrowserRouter>
  );
}

