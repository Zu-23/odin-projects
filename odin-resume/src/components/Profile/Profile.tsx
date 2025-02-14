import "./profile.css";
import Input from "../Input/Input";


export default function Profile() {


  return (
    <div className="profile-border">
      <form className="form">
        <Input id="fname" label="Full Name"  />
        <Input id="special" label="Specialized" />
        <Input id="bio" label="Bio" />
      </form>
    </div>
  );
}
