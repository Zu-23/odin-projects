import { useState } from "react";
import Input from "../Input/Input";
import "./Newitem.css"

export default function NewItem() {
  const [inputs, setInputs] = useState(0);
  const ifClicked = () => {
    setInputs(inputs + 1);
  };
  const deleteItem = () =>{
    setInputs(inputs - 1);
  }
  const arrayInputs =  pushItems(inputs, deleteItem)

  return (
    <div className="newitem-container">
      {arrayInputs.map((val) => {
        return (
            val
        );
      })}
      <button type="button" onClick={ifClicked}>
        New Item
      </button>
    </div>
  );
}

function pushItems(num: number, deleteItem : () => void) {

  return Array(num)
    .fill(0)
    .map((_val, indx) => (
        <Input id={`link${indx}`} label={`link-${indx}`} deletable={true} handleDelete={deleteItem}/>
    ));
}
