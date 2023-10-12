import React, { useState } from "react";

export default function () {
  function Square() {
    const [value, setValue] = useState("");

    function handlClick() {
      setValue("X");
    }
    return (
      <button
        className="border border-black text-2xl font-bold w-12 h-12 flex items-center justify-center transition-transform duration-300"
        onClick={handlClick}
      >
        {value}
      </button>
    );
  }

  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen flex-col bg-black-blue">
        <h1 className="mb-12 text-6xl font-bold text-white">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-2">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </React.Fragment>
  );
}
