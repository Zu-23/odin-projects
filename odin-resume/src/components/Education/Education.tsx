import Input from "../Input/Input";
import "./Education.css";
import NewItem from "../NewItem/NewItem";
import InputWithOptions from "../InputWithOptions/InputWithOptions";
import { useRef, useState } from "react";

export interface eduData {
  title: string;
  subtitle: string;
  description: string;
}
export default function Education() {
  const [editing, setEditing] = useState(false);
  const dataRef = useRef([{ title: "", subtitle: "", description: "" }]);
  let id: number = 0;

  function editHandler() {
    setEditing(!editing);
  }
  console.log(dataRef.current[id]);
  return (
    <div className="education">
      {editing && (
        <InputWithOptions data={dataRef} id={id} setEditing={setEditing} />
      )}
      {!editing && (
        <button type="button" onClick={editHandler}>
          Add Education
        </button>
      )}
    </div>
  );
}
//create an add new button and pass to it the data with an id
//create a button to add new item
