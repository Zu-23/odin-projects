import React, { Dispatch, useState } from "react";
import InptOpt from "../InptOpt/InptOpt";

import { eduData } from "../Education/Education";
interface Props {
  data: React.MutableRefObject<{
    title: string;
    subtitle: string;
    description: string;
}[]>;
  id: number;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputWithOptions({ data, id, setEditing }: Props) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  function submitting() {
    setEditing((prv) => !prv);
    data.current[id] = { ...data.current[id], title: formData.title };

  }

  return (
    <div className="inpt-comp">
      <form onSubmit={submitting}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
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
