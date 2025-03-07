import "./profile.css";
import Input from "../Input/Input";
import { allDataType } from "../App";

export interface ProfileProps {
  handleAllData: (key: keyof allDataType, val : string | number) => void;
}

export default function Profile({ handleAllData }: ProfileProps) {
 

  return (
    <div className="profile-border">
      <form className="form">
        <Input id="fname" label="Full Name" onChange={(e) => handleAllData("name", e.target.value)} />
        <Input id="special" label="Specialized" onChange={(e) => handleAllData("specialized", e.target.value)} />
        <Input id="bio" label="Bio" onChange={(e) => handleAllData("bio", e.target.value)}/>
      </form>
    </div>
  );
}
