import React, { useState } from "react";
import Input from "../Input/Input";

import { EducationData } from "./types";

interface EducationInputProps {
    handleSave: (data: EducationData) => void;
    initialData?: EducationData;
}

const DEFAULT_DATA: EducationData = {description: '', subtitle: '', title: ''};

export const EducationInput: React.FC<EducationInputProps> = ({handleSave, initialData}) => {
    const [data, setData] = useState<EducationData>(initialData ?? DEFAULT_DATA);

    const onSaveClick = () => {
        console.log(JSON.stringify(data));
        handleSave(data);
    }

    const onInputChange = (key: keyof EducationData) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("we enter " + e.target.value);
            setData((prevData) => ({
                ...prevData,
                [key]: e.target.value
            }))
        }
    }

    return <div>
        <Input id="title" label="Title" onChange={onInputChange("title")} defaultValue={data.title}/>
        <Input id="sub-title" label="Subtitle" onChange={onInputChange("subtitle")} defaultValue={data.subtitle}/>
        <Input id="description" label="Description" onChange={onInputChange("description")} defaultValue={data.description}/>

        <button onClick={onSaveClick}>SAVE</button>
    </div>
}