import React, { Dispatch, useRef, useState } from "react";
import InptOpt from "../InptOpt/InptOpt";

import { eduData } from "../Education/Education";
interface Props {
  data: React.MutableRefObject<
    {
      title: string;
      subtitle: string;
      description: string;
    }[]
  >;
  editId?: React.MutableRefObject<number>;
  setAdding: React.Dispatch<React.SetStateAction<boolean>>;
  setEditing?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputWithOptions({
  data,
  editId,
  setEditing,
  setAdding,
}: Props) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
  }); 
  const dummyTitle = useRef("");
  if (editId?.current !== undefined && editId?.current >= 0)
    dummyTitle.current = data.current[editId.current].title;
  function submitting() {
    console.log(formData);
    if (editId?.current === undefined || editId?.current < 0) {
      setAdding((prv) => !prv);
      data.current.push( {
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description,
      });
    } else {
      setEditing?.((prv) => !prv);
      data.current[editId!.current] = {
        ...data.current[editId!.current],
        title: formData.title,
      };
      editId!.current = -1;
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>)
  {
    dummyTitle.current = e.target.value;
    setFormData({ ...formData, title: e.target.value })

  }

  return (
    <div className="inpt-comp">
      <form onSubmit={submitting}>
        <input
          type="text"
          placeholder="title"
          required
            value={ dummyTitle.current}

          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="subtitle"
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
          value={formData.subtitle}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          value={formData.description}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
//we gonna need to send data for education to child
//first time we press new item we send data to InptOpt to populate
//then we check if array of data is not empty to show education elements
//
