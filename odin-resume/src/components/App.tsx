import Accordion from "./Accordion/Accordion";
import { FaUser } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { MdCastForEducation as Edu } from "react-icons/md";
import Profile from "./Profile/Profile";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";

export interface CvData {
  name: string;
  email: string;
  phone: string;
}

export default function App() {


  return (
    <div className="app">
      <Accordion header="Profile" content={<Profile />} icon={<FaUser />} />
      <Accordion header="Contact" content={<Contact />} icon={<MdContactMail />} />
      <Accordion header="Education" content={<Education />} icon={<Edu/>} />
    </div>
  );
}
