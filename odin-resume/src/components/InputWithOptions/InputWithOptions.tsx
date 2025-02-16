import { useState } from "react";
import InptOpt from "../InptOpt/InptOpt";

type eduData = {
  tite: string;
  subtitle: string;
  description: string;
};

export default function InputWithOptions() {
  const [eduDataVar, setEduData] = useState<eduData[]>([]);
  const [showOpt, setShowOpt] = useState(false);
  function showInputs() {
    setShowOpt(!showOpt);
    console.log(showOpt);
  }
  return (
    <div className="btn-inp">
      {showOpt && <InptOpt  />}
      <button type="button" onClick={showInputs}>
        New Item
      </button>
    </div>
  );
}
//we gonna need to send data for education to child
//first time we press new item we send data to InptOpt to populate
//then we check if array of data is not empty to show education elements
//
