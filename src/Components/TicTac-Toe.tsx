import React, { useState } from "react";
import ButtonBack from "../Navbars/Button-Back";
// import Navbar from "../Navbars/Navbar";

type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  let squareClass =
    "border border-black text-2xl font-bold w-12 h-12 flex items-center justify-center transition-transform duration-300";

  // Tambahkan kelas latar belakang abu-abu tua jika tidak ada "X" atau "O" dalam suares
  if (!value) {
    squareClass += " bg-gray-700";
  } else if (value === "X") {
    squareClass += " text-black bg-red-600 hover:scale-105"; // Apply red text for X and a scale effect on hover
  } else if (value === "O") {
    squareClass += " text-black bg-blue-600 hover:scale-105"; // Apply blue text for O and a scale effect on hover
  }

  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
}

// function untuk menyimpan pemenang
function calculatorWinners(squares: string[]) {
  const lines = [
    // Vertikal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return false;
}

export default function TicTac() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquareClick(i: number) {
    const nextSquares = squares.slice();

    // AGAR DIA TIDAK MENJALANKAN FUNGSI HNDLECLICK LAGI / ketika d kilik dia akan langsung nge return
    if (squares[i] || calculatorWinners(squares)) return;

    // VERSI KONDISI
    // if (xIsNext) {
    //   nextSquares[i] = "X";
    // } else {
    //   nextSquares[i] = "O";
    // }

    // VERSI TERNERY
    nextSquares[i] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculatorWinners(squares);

  let status = "";

  if (winner) {
    status = "Winner 😘 : " + winner;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="flex justify-center items-center h-screen flex-col bg-black-blue">
        <ButtonBack/>
        <h1 className="mb-12 text-6xl font-bold text-white">Tic Tac Toe</h1>
        <div className="bg-gray-900 text-white mb-8 rounded-lg p-2 font-bold">
          {status}
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 w-36 h-36">
          <Square
            value={squares[0]}
            onSquareClick={() => handleSquareClick(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleSquareClick(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleSquareClick(2)}
          />
          <Square
            value={squares[3]}
            onSquareClick={() => handleSquareClick(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleSquareClick(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleSquareClick(5)}
          />
          <Square
            value={squares[6]}
            onSquareClick={() => handleSquareClick(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleSquareClick(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleSquareClick(8)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
