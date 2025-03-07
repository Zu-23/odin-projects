import "./contact.css";
import Input from "../Input/Input";
import NewItem from "../NewItem/NewItem";
import { ProfileProps } from "../Profile/Profile";

export default function Contact({ handleAllData }: ProfileProps) {
  return (
    <div className="contact">
      <form className="form">
        <Input id="phone" label="Phone" onChange={(e) => handleAllData("phone", e.target.value)} />
        <Input id="email" label="Email"onChange={(e) => handleAllData("email", e.target.value )}/>
        <Input id="Link 1" label="link 1" />
        <NewItem />
      </form>
    </div>
  );
}
