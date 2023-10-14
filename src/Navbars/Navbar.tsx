import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="h-screen bg-black">
        <div className="h-screen bg-gray-900 mx-36 p-8">
          <div className="flex justify-center mt-16 text-4xl font-bold text-white">
            <h1>Micro Features</h1>
          </div>
          <div className="flex justify-center m-4 mt-16 mb-6">
            <div className="border border-2 flex w-9/12 p-4 rounded-full justify-between bg-gray-900">
              <div>
                <h2 className="text-white font-bold">Currency_Converter</h2>
                <p className="text-white">
                  <span className="text-green-500">Easy,</span> React
                  (JavaScript), Function, Logic, Conditional Rendering
                </p>
              </div>
              <div>
                <Link
                  className="border-2 p-2 rounded-full text-white bg-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:transform hover:scale-105 hover:transition-transform duration-300"
                  to={`/Currency`}
                >
                  <button color="red">Solve Challenge</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center m-4 mt-16 mb-6">
            <div className="border border-2 flex w-9/12 p-4 rounded-full justify-between bg-gray-900">
              <div>
                <h2 className="text-white font-bold">TicTacToe</h2>
                <p className="text-white">
                  <span className="text-green-500">Easy,</span> React
                  (JavaScript), Function, Logic, Conditional Rendering
                </p>
              </div>
              <div>
                <Link
                  className="border-2 p-2 rounded-full text-white bg-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:transform hover:scale-105 hover:transition-transform duration-300"
                  to={`/TicTac`}
                >
                  <button color="red">Solve Challenge</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center m-4 mt-16 mb-6">
            <div className="border border-2 flex w-9/12 p-4 rounded-full justify-between bg-gray-900">
              <div>
                <h2 className="text-white font-bold">Salary_Calculator</h2>
                <p className="text-white">
                  <span className="text-green-500">Easy,</span> React
                  (JavaScript), Function, Logic, Conditional Rendering
                </p>
              </div>
              <div>
                <Link
                  className="border-2 p-2 rounded-full text-white bg-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:transform hover:scale-105 hover:transition-transform duration-300"
                  to={`/Calculasi`}
                >
                  <button color="red">Solve Challenge</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
