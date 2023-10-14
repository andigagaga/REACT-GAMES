import React from "react";
import { Routes, Route} from "react-router-dom";

import Navbar from "./Navbars/Navbar";
import Currency_converter from "./Components/Currency_converter";
import TicTac from "./Components/TicTac-Toe";
import Calculasi2 from "./Components/Calculasi";
// import ButtonBack from "./Navbars/Button-Back";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      {/* <ButtonBack/> */}
      <Routes>
        <Route path="/Currency" element={<Currency_converter />} />
      </Routes>
      <Routes>
        <Route path="/TicTac" element={<TicTac />} />
      </Routes>
      <Routes>
        <Route path="/Calculasi" element={<Calculasi2 />} />
      </Routes>
    
    </React.Fragment>
  );
}
