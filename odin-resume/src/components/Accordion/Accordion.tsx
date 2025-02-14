import { ReactNode, useState } from "react";
import { MdKeyboardArrowRight as ArrowRightIcon } from "react-icons/md";
import { MdKeyboardArrowDown as ArrowDownIcon} from "react-icons/md";
import "./Accordion.css"
interface AccordionProps {header:string, content: ReactNode, icon : JSX.Element }

export default function Accordion({header,content, icon} : AccordionProps)
{
    const [isDropped, setIsDropped] = useState(false);
    const toggleDropDown = ()=>
    {
        setIsDropped(!isDropped);
    }
    return (
        <div className="accordion">
            <button className="dropbtn px" onClick={toggleDropDown}>
                {icon}{header}{isDropped ? <ArrowDownIcon size={30}/> : <ArrowRightIcon size={30}/>}
            </button>
            <div id="myDropdown" className={`dropdown ${isDropped ? "show" : ""}`}>
                {content}
            </div>
        </div>
    )
}