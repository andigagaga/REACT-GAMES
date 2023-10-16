import React, { useState } from "react";
import ButtonBack from "../Navbars/Button-Back";

export default function TimeCountDuration() {
  const [partyTime, setPartyTime] = useState(false);
  const [targetDate, setTargetDate] = useState("");
  const [targetTime, setTargetTime] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);
  const [countDownInterval, setCountDownInterval] = useState<number | null>(
    null
  );

  const handlDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetDate(e.target.value);
    setPartyTime(false);
  };

  const handlTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetTime(e.target.value);
    setPartyTime(false);
  };

  const startCount = () => {
    if (countDownInterval) {
      clearInterval(countDownInterval);
    }

    const target = new Date(`${targetDate}T${targetTime}`); // Format input tanggal dan waktu menjadi ISO8601

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const Days = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(Days);

      const Hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(Hours);

      const Minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(Minutes);

      const Seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(Seconds);

      if (Days <= 0 && Hours <= 0 && Minutes <= 0 && Seconds <= 0) {
        setPartyTime(true);
        clearInterval(interval);
      }
    }, 1000);

    setCountDownInterval(interval);
  };

  const resetCount = () => {
    if (countDownInterval) {
      clearInterval(countDownInterval);
    }

    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setPartyTime(false);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-black-blue">
      <ButtonBack />
      <div className="p-4">
        <input
          type="date"
          className="border-2"
          onChange={handlDateChange}
          value={targetDate}
        />
        <input
          type="time"
          className="border-2 mx-2"
          onChange={handlTimeChange}
          value={targetTime}
        />
        <button
          className="border-2 bg-gray-200 p-1 rounded"
          onClick={startCount}
        >
          Start Count
        </button>
        <button
          className="border-2 ml-2 bg-gray-200 p-1 rounded"
          onClick={resetCount}
        >
          Reset
        </button>
      </div>

      {partyTime ? (
        <h1>Count Ended</h1>
      ) : (
        <div className="bg-black p-8 mt-8">
          <div className="bg-gray-400 flex">
            <div className="text-black p-4">
              <span className="mr-4 bg-black text-white p-1 rounded">
                {days}
              </span>
              <span>Days</span>
            </div>
            <div className="text-black p-4">
              <span className="mr-4 bg-black text-white p-1 rounded">
                {hours}
              </span>
              <span>Hours</span>
            </div>
            <div className="text-black p-4">
              <span className="mr-4 bg-black text-white p-1 rounded">
                {minutes}
              </span>
              <span>Minutes</span>
            </div>
            <div className="text-black p-4">
              <span className="mr-4 bg-black text-white p-1 rounded">
                {second}
              </span>
              <span>Second</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
