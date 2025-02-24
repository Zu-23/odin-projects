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
  const [editing, setEditing] = useState(false);
  const dataRef = useRef([{ title: "", subtitle: "", description: "" }]);
  const id = useRef(0);
  const editId = useRef(-1);
  const [testId, setTestId] = useState(-1);
  console.log("rendered");

  function addingHandler() {
    setAdding(!adding);
    setEditing(false);
  }

  function editingHandler(ndx: number) {
    //insted of using editing use ndx as condition to render input comp
    editId.current = ndx;
    setTestId(ndx); //so i can force render inputwithoption with clicking on multiple Modify button
    setEditing(true)
    if (adding)
        setAdding(false);
  }
  return (
    <div className="education">
      {dataRef.current[0].title.length > 0 &&
        dataRef.current.map((elem, ndx) => {
          return (
            <div className="edu-elements">
              <h1>{elem.title}</h1>
              <button onClick={() => editingHandler(ndx)}>Modify</button>
              {editing && editId.current === ndx && (
                <InputWithOptions
                  data={dataRef}
                  id={id}
                  setAdding={setAdding}
                  editId={editId}
                  setEditing={setEditing}
                />
              )}
            </div>
          );
        })}
      {adding &&(
        <InputWithOptions data={dataRef} id={id} setAdding={setAdding} />
      )}
      {!adding &&(
        <button type="button" onClick={addingHandler}>
          Add Education
        </button>
      )}
    </div>
  );
}
//create an add new button and pass to it the data with an id
//create a button to add new item
