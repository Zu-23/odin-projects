import Input from "../Input/Input";
import "./Education.css";
import NewItem from "../NewItem/NewItem";
import InputWithOptions from "../InputWithOptions/InputWithOptions";
import { useRef, useState } from "react";
import { DiVim } from "react-icons/di";

export interface eduData {
  title: string;
  subtitle: string;
  description: string;
}
export default function Education() {
  const [adding, setAdding] = useState(false);
  const[editing, setEditing] = useState(false)
  const dataRef = useRef([{ title: "", subtitle: "", description: "" }]);
  const id = useRef(0);
  const editId = useRef(-1);

  function addingHandler() {
    setAdding(!adding);
  }

  function editingHandler(ndx: number)
  {
    editId.current = ndx;
    setEditing(true);
  }
 
  console.log(`id value ${id.current}`);
  console.log(dataRef.current[id.current - 1]);
  return (
    <div className="education">
      {dataRef.current[0].title.length > 0 &&
        dataRef.current.map((elem, ndx) => {
          return <div>
            <button onClick={()=> editingHandler(ndx)}>Modify</button>
          </div>;
        })}
      {editing && <InputWithOptions data={dataRef} id={id} setAdding={setAdding} editId={editId} setEditing={setEditing}/>}
      {adding && (
        <InputWithOptions data={dataRef} id={id} setAdding={setAdding} />
      )}
      {!adding && (
        <button type="button" onClick={addingHandler}>
          Add Education
        </button>
      )}
    </div>
  );
}
//create an add new button and pass to it the data with an id
//create a button to add new item
