import { useState } from "react";

export default function Calculasi() {
  const [gajiPokok, setGajiPokok] = useState<number>(0);
  const [tunjangan, setTunjangan] = useState<number>(0);
  const [kewajibanPokok, setKewajibanPokok] = useState<number>(0);
  const [gajiKotor, setGajiKotor] = useState<number>(0);
  const [gajiBersih, setGajiBersih] = useState<number>(0);

  const jumlahTotalGaji = () => {
    // Memastikan input adalah angka yang valid
    if (isNaN(gajiPokok) || isNaN(tunjangan) || isNaN(kewajibanPokok)) {
      alert("Masukkan angka yang valid.");
      return;
    }

    // Menghitung jumlah gaji kotor
    const jumlahGajiKotor = gajiPokok + tunjangan;

    // Menghitung gaji bersih
    const jumlahGajiBersih = jumlahGajiKotor - kewajibanPokok;

    // Menetapkan hasil perhitungan ke state
    setGajiKotor(jumlahGajiKotor);
    setGajiBersih(jumlahGajiBersih);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-800">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="GajiPokok" className="block text-gray-700 font-bold">
            Gaji Pokok
          </label>
          <input
            type="text"
            className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mt-2"
            id="GajiPokok"
            onChange={(e) => setGajiPokok(parseFloat(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Tunjangan" className="block text-gray-700 font-bold">
            Tunjangan
          </label>
          <input
            type="text"
            className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mt-2"
            id="Tunjangan"
            onChange={(e) => setTunjangan(parseFloat(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="KewajibanPokok"
            className="block text-gray-700 font-bold"
          >
            Kewajiban Pokok
          </label>
          <input
            type="text"
            className="border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mt-2"
            id="KewajibanPokok"
            onChange={(e) => setKewajibanPokok(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={jumlahTotalGaji}
            className="border p-2 rounded bg bg-green-400"
          >
            Hitung Gaji
          </button>
        </div>
        <div>
          <h1>Hasil</h1>
          <div>
            <h2>Gaji Kotor : {gajiKotor.toLocaleString("id-ID")}</h2>
          </div>
          <div>
            <h2>Gaji Pokok : {gajiPokok.toLocaleString("id-ID")}</h2>
          </div>
          <div>
            <h2>Gaji Bersih : {gajiBersih.toLocaleString("id-ID")}</h2>
          </div>
        </div>
      </form>
    </div>
  );
}
