import { useState } from "react";

export default function InputWithOptions() {
  const [showOpt, setShowOpt] = useState(false);
  function showInputs() {
    setShowOpt(!showOpt);
    console.log(showOpt);
}
  return (
    <div className="btn-inp">
      <button type="button" onClick={showInputs}>
        click me
      </button>
      
    </div>
  );
}

