import { useEffect, useState } from "react";
import ButtonBack from "../Navbars/Button-Back";
// import Navbar from "../Navbars/Navbar";

export default function Calculasi2() {
  const [gajiPokok, setGajiPokok] = useState<number>(0);
  const [tunjangan, setTunjangan] = useState<number>(0);
  const [kewajibanPokok, setKewajibanPokok] = useState<number>(0);
  const [gajiKotor, setGajiKotor] = useState<number>(0);
  const [gajiBersih, setGajiBersih] = useState<number>(0);

  const jumlahGaji = () => {
    // menghitung gaji kotor
    const jumlahGajiKotor = gajiPokok + tunjangan;

    // menghitung gaji bersih
    const jumlahGajiBersih = jumlahGajiKotor - kewajibanPokok;

    // set/menetapkan hasil
    setGajiKotor(jumlahGajiKotor);
    setGajiBersih(jumlahGajiBersih);
  };

  const [showCard, setShowCard] = useState(false);
  const [countdown, setCountdown] = useState(3); // Waktu countdown awal

  useEffect(() => {
    // Mengurangi countdown setiap detik
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Menampilkan card setelah countdown selesai (3 detik)
    setTimeout(() => {
      clearInterval(countdownInterval);
      setShowCard(true);
    }, 3000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      {/* <Navbar/> */}
      <div className="flex justify-center items-center h-screen bg-black-blue from-blue-900 to-blue-600">
        
        {showCard ? (
          <form className="bg-gray-700 shadow-md p-6 rounded-lg w-96 space-y-6 transform translateY(0) opacity-100 transition-transform duration-500 ease-in-out">
            <ButtonBack/>
            <h1 className="text-center text-4xl font-bold text-blue-900 text-white">
              Salary Calculator
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="Basic-Salary" className="block text-gray-700 text-white">
                  Basic Salary/gajipokok
                </label>
                <input
                  className="border p-2 w-full rounded-md focus:ring focus:ring-blue-300"
                  type="number"
                  id="Basic-Salary"
                  onChange={(e) => setGajiPokok(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="Basic-Salary" className="block text-gray-700 text-white">
                  Allowance/tunjangan
                </label>
                <input
                  className="border p-2 w-full rounded-md focus:ring focus:ring-blue-300"
                  type="number"
                  id="Basic-Salary"
                  onChange={(e) => setTunjangan(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="Basic-Salary" className="block text-gray-700 text-white">
                  Obligations/kewajiban pokok
                </label>
                <input
                  className="border p-2 w-full rounded-md focus:ring focus:ring-blue-300"
                  type="number"
                  id="Basic-Salary"
                  onChange={(e) =>
                    setKewajibanPokok(parseFloat(e.target.value))
                  }
                />
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-blue-900 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                type="button"
                onClick={jumlahGaji}
              >
                Submit
              </button>
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-2xl text-white">Result</h1>
              <div>
                <h2 className="text-blue-900 text-white">
                  Gross Salary/gajikotor: {gajiKotor}
                </h2>
              </div>
              <div>
                <h2 className="text-blue-900 text-white">
                  Basic Salary/gajipokok: {gajiPokok.toLocaleString("id-ID")}
                </h2>
              </div>
              <div>
                <h2 className="text-blue-900 text-white">
                  Net Salary/gajibersih: {gajiBersih}
                </h2>
              </div>
            </div>
          </form>
        ) : (
          
          <div className="text-white text-4xl font-bold">
            Menunggu... {countdown}{" "}
            {/* Menampilkan pesan selama waktu countdown */}
          </div>
        )}
      </div>
    </>
  );
}
