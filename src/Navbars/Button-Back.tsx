import { Link } from "react-router-dom";

export default function ButtonBack() {
  return (
    <div className="flex justify-center mb-8">
      <Link
        className="border-2 p-2 rounded-full text-white bg-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:transform hover:scale-105 hover:transition-transform duration-300"
        to={`/`}
      >
        <button className=" bg-black text-white p-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
          Back
        </button>
      </Link>
    </div>
  );
}
