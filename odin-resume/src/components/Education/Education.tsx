import React, { useState } from "react";
import "./Education.css";
import { EducationInput } from "./EducationInput";
import { EducationData } from "./types";
import { ProfileProps } from "../Profile/Profile";

export const Education = ({handleAllData} : ProfileProps) => {
  const [educationData, setEducationData] = useState<EducationData[]>([]);
  const [isCreate, setIsCreate] = useState(false);
  const [editIndex, setEditIndex] = useState<number|null>(null);

  const onCreate = (data: EducationData) => {
    setEducationData((educationData) => [...educationData, data]);
    handleAllData("education", educationData);
    setIsCreate(false);
  };

  const onEdit = (data: EducationData) => {
    if (editIndex === null ) return;

    const newEducationData = [...educationData];

    newEducationData.splice(editIndex, 1, data);

    setEducationData(newEducationData);
    setEditIndex(null);
  }

  const handleAddNewClick = () => {
    setIsCreate(true);
    setEditIndex(null);
  };

  const handleEdit = (index: number) => () => {
    setEditIndex(index);
    setIsCreate(false);
  };

  return (
    <div className="education">
      {educationData.map((data, index) => {
        console.log(data);
        return (
          <div>
            <p className="font-bold" key={index}>
              {data.title}
            </p>
            {editIndex === index && <EducationInput handleSave={onEdit} initialData={data} />}
            {editIndex !== index && <button onClick={handleEdit(index)}>EDIT</button>}
          </div>
        );
      })}
      {isCreate && <EducationInput handleSave={onCreate} />}
      {!isCreate && <button onClick={handleAddNewClick}>ADD NEW</button>}
    </div>
  );
};
