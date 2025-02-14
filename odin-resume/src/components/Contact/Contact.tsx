import "./contact.css";
import Input from "../Input/Input";
import NewItem from "../NewItem/NewItem";

export default function Contact() {
  return (
    <div className="contact">
      <form className="form">
        <Input id="phone" label="Phone" />
        <Input id="email" label="Email" />
        <Input id="Link 1" label="link 1" />
        <NewItem />
      </form>
    </div>
  );
}
