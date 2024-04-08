import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavigationBar from './NavigationBar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Sharavu from './Components/Sharavu';
import Polali from './Components/Polali';
import Kudroli from './Components/Kudroli';
import Kateel from './Components/Kateel';
import Donate from './Components/Donate';
import Bookpooja from './Components/Bookpooja';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sharavu" element={<Sharavu />} />
        <Route path="/polali" element={<Polali />} />
        <Route path="/kudroli" element={<Kudroli />} />
        <Route path="/kateel" element={<Kateel />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate" element={<a href="https://rzp.io/l/H7RURQzD">Donate Now</a>} />
        <Route path="/bookpooja" element={<Bookpooja />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
