import React, { useState } from "react";
import ButtonBack from "../Navbars/Button-Back";

export default function TimeCountDuration() {

    const [partyTime, setPartyTime] = useState(false)
    const [targetDate, setTargetDate] = useState("")
    const [targetTime, setTargetTime] = useState("")

    const handlDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTargetDate(e.target.value);
        setPartyTime(false);
    }

    const handlTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTargetTime(e.target.value)
        setPartyTime(false)
    }


  return (
    <div className="flex flex-col h-screen justify-center items-center bg-black-blue">
        <ButtonBack/>
      <div className="p-4">
        <input type="date" className="border-2" onChange={handlDateChange} value={targetDate}/>
        <input type="time" className="border-2 mx-2" onChange={handlTimeChange} value={targetTime}/>
        <button className="border-2 bg-gray-200 p-1 rounded">
          Start Count
        </button>
        <button className="border-2 ml-2 bg-gray-200 p-1 rounded">Reset</button>
      </div>
      <div className="bg-black p-8 mt-8">
        <div className="bg-gray-400 flex">
          <div className="text-black p-4">
            <span className="mr-4 bg-black text-white p-1 rounded">..Days</span>
            <span>Days</span>
          </div>
          <div className="text-black p-4">
            <span className="mr-4 bg-black text-white p-1 rounded">
              ..Hours
            </span>
            <span>Hours</span>
          </div>
          <div className="text-black p-4">
            <span className="mr-4 bg-black text-white p-1 rounded">
              ..Minutes
            </span>
            <span>Minutes</span>
          </div>
          <div className="text-black p-4">
            <span className="mr-4 bg-black text-white p-1 rounded">
              ..Seconds
            </span>
            <span>Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
