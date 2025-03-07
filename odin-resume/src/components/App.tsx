import Accordion from "./Accordion/Accordion";
import { FaUser } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { MdCastForEducation as Edu } from "react-icons/md";
import Profile from "./Profile/Profile";
import Contact from "./Contact/Contact";
import { Education } from "./Education/Education";
import { useState } from "react";
import { EducationData } from "./Education/types";


export interface allDataType{
  name: string;
  specialized:string;
  bio:string;
  phone:string;
  email:string;
  education: EducationData[];
}
const DEFAULT_DATA : allDataType = {name:"", phone:"", email:"", education: [], bio:"", specialized:""}
export default function App() {
  const [allData, setAllData] = useState<allDataType>(DEFAULT_DATA)
  const handleAllData = (key: keyof allDataType, val : string | number | EducationData[]) =>
  {
    console.log(allData)
    setAllData((prv) => {
      return ({...prv, [key] : val})
    })
  }
  return (
    <div className="app">
      <div className="resume-and-accordion">
        <div className="accordion">
          <Accordion header="Profile" content={<Profile handleAllData={handleAllData} />} icon={<FaUser />} />
          <Accordion
            header="Contact"
            content={<Contact handleAllData={handleAllData}/>}
            icon={<MdContactMail />}
          />
          <Accordion
            header="Education"
            content={<Education handleAllData={handleAllData}/>}
            icon={<Edu />}
          />
        </div>
        <div className="resume-section">
          <div className="resume-header">
            <p>{allData.name}</p>
            <p>{allData.email}</p>
          </div>
          <div className="education-section">
              <div className="education-title">
                <h1>Education</h1>
              </div>
              <div>
              {allData.education.map((val) =>{
                return (
                  <div>
                    {val.title}
                  </div>
                )
              })}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
