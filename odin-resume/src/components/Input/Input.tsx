import "./Input.css";
import { FaTrash } from "react-icons/fa";

interface InputProps {
  id: string;
  label: string;
  deletable?: boolean;
  handleDelete ?: () => void;}

export default function Input({ id, label, deletable, handleDelete }: InputProps) {
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
      <input id={id} type="text" className="form-input" />
    </div>
  );
}
