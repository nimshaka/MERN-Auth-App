import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';
import SingIn from './Components/Singin';
import SingUp from './Components/Singup';

export default function App() {
  return (
    <BrowserRouter>
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

