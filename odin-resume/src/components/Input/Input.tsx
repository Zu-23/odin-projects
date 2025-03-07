import "./Input.css";
import { FaTrash } from "react-icons/fa";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  id: string;
  label: string;
  deletable?: boolean;
  handleDelete ?: () => void;}

export default function Input({ id, label, deletable, handleDelete, ...rest }: InputProps)
{
  return (
    <div className="input-container">
      <div className="align-trash">
        <label className="roboto-bold" htmlFor={id}>
          {label}
        </label>
        {deletable && (
          <button type="button" onClick={handleDelete}>
            <FaTrash />
          </button>
        )}
      </div>
      <input id={id} type="text" {...rest} className="form-input" />
    </div>
  );
}
