import { useState } from "react";

export default function InptOpt(props) {
  const [text, setText] = useState({title:"", subtitle:"", description:""});
  return (
    <div className="inpt-div">
      <input type="text" placeholder="title" value={text.title}
      onChange={(e) => {setText({...text,title: e.target.value})}} />
    </div>
  );
}
