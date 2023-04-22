import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./components/Login";
import Personal from "./pages/Personal";
import { useState } from "react";
import Cardinfo from "./pages/Cardinfo";
import About from "./components/About";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";



const App = () => {
  const [isShow, setIsShow] = useState(false)
  const [reg, setReg] = useState(false)
  
  
  return (
    <>
      <Header setIsShow={setIsShow} />
      
     
      <Routes>
        <Route path="/" element={<Home setIsShow={setIsShow} isShow={isShow}/>} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/cardinfo" element={<Cardinfo />} />
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
      <About/>
      
      <Footer />
      {
        isShow && <Login setIsShow={setIsShow} />
      }
    
    </>
  );
}

export default App;
