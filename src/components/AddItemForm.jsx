import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ handleAddItem }) {
  const inputRef = useRef(null);
  const [error, setError] = useState(null);
  const handleFormSubmission = (event) => {
    event.preventDefault();
    const itemTextValue = inputRef.current.value;
    if (!itemTextValue) {
      setError("Please enter an item name.");
      inputRef.current.focus();
      return;
    }
    handleAddItem(itemTextValue);
    inputRef.current.value = "";
    inputRef.current.focus();
    setError(null);
  };
  return (
    <form onSubmit={(event) => handleFormSubmission(event)}>
      <h2>Add an Item</h2>
      <input ref={inputRef} type="text" autoFocus={true}></input>
      <Button>Add to List</Button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
