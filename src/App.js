

import {  Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import {Home} from "./Home";
import { Cart } from "./Cart";
function App() {
  return (
    <>
    <Header/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
         
          
          
          
        </Routes>
      
    </>
    
  );
}

export default App;
