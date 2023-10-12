import React, { useState } from "react";

export default function Currency_converter() {
  const [input, setInput] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");
  const [hasil, setHasil] = useState<string | null>(null);

  const handlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.target.value;
    setInput(valueInput);
  };

  const handlFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueFrom = e.target.value;
    setFrom(valueFrom);
  };

  const handlTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueTo = e.target.value;
    setTo(valueTo);
  };

  const handlConvert = () => {
    if (from === "USD" && to === "USD") {
      setHasil(`$ $(input)`);
    }
    if (from === "IDR" && to === "IDR") {
      const Result = Number(input);
      setHasil(`RP. ${Result.toString()}`);
    }
    if (from === "EUR" && to === "EUR") {
      const Result = Number(input);
      setHasil(`$ ${Result.toString()}`);
    }
    if (from === "USD" && to === "IDR") {
      const Result = Number(input) * 15000;
      setHasil(`RP. ${Result.toString()}`);
    }
    if (from === "USD" && to === "EUR") {
      const Result = Number(input) * 0.94;
      setHasil(`$ ${Result.toString()}`);
    }
    if (from === "IDR" && to === "USD") {
      const Result = Number(input) / 15000;
      setHasil(`$ ${Result.toString()}`);
    }
    if (from === "IDR" && to === "EUR") {
      const Result = Number(input) / 16677.77;
      setHasil(`$ ${Result.toString()}`);
    }
    if (from === "EUR" && to === "USD") {
      const Result = Number(input) / 0.94;
      setHasil(`$ ${Result.toString()}`);
    }
    if (from === "EUR" && to === "IDR") {
      const Result = Number(input) * 16677.77;
      setHasil(`$ ${Result.toString()}`);
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen bg-green-500">
        <div className="flex flex-col items-center w-full mx-36 bg-white p-8 rounded-lg">
          <h1 className="text-2xl mb-4 font-bold">Currency Converter</h1>
          <div className="mb-4 w-full">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter amount"
              value={input}
              onChange={handlInput}
            />
          </div>
          <div className="mb-4 flex w-full">
            <select
              className="w-1/2 p-2 border border-gray-300 rounded"
              value={from}
              onChange={handlFrom}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="IDR">IDR</option>
            </select>
            <h3 className="mx-2">TO</h3>
            <select
              className="w-1/2 p-2 border border-gray-300 rounded"
              value={to}
              onChange={handlTo}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="IDR">IDR</option>
            </select>
          </div>
          <div className="w-full">
            <button
              className="w-full bg-green-300 p-2 rounded text-white"
              onClick={handlConvert}
            >
              Convert
            </button>
          </div>
          <div className="mt-4">
            <h1 className="font-bold">
              {hasil !== null ? `Result : ${hasil}` : "Result :"}
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
