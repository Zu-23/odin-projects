import Input from "../Input/Input";
import "./Education.css";
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
  const editId = useRef(-1);
  const [testId, setTestId] = useState(-1);
  console.log("rendered");

  console.log(dataRef.current);
  function addingHandler() {
    setAdding(!adding);
    setEditing(false);
  }

  function editingHandler(ndx: number) {
    //insted of using editing use ndx as condition to render input comp
    editId.current = ndx;
    setTestId(ndx); //so i can force render inputwithoption with clicking on multiple Modify button
    setEditing(true);
    if (adding) setAdding(false);
  }
  return (
    <div className="education">
      {dataRef.current[1] !== undefined &&
        //maybe a condition here
        dataRef.current.map((elem, ndx) => {
          console.log("why?");
          return (
            <div className="edu-elements">
              {ndx > 0 && <h1>{elem.title}</h1>}
              {ndx > 0 &&(
                <button onClick={() => editingHandler(ndx)}>Modify</button>
              )}

              {editing && ndx === editId.current && (
                <InputWithOptions
                  data={dataRef}
                  setAdding={setAdding}
                  editId={editId}
                  setEditing={setEditing}
                />
              )}
            </div>
          );
        })}
      {adding && <InputWithOptions data={dataRef} setAdding={setAdding} />}
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
