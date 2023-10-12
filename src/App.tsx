import React from "react";
// import Latihan from "./Components/Latihan";
import Currency_converter from "./Components/Currency_converter";

import Calculasi2 from "./Components/Calculasi";
import TicTac from "./Components/TicTac-Toe";

export default function App() {
  return (
    <React.Fragment>
      {/* <Latihan/> */}
      

     <Calculasi2/>
     <TicTac/>
     <Currency_converter/>
    </React.Fragment>
  );
}
