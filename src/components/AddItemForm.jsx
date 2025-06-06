import { useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const inputRef = useRef(null);
  const handleItemAdd = (event) => {
    event.preventDefault();
    const itemValue = inputRef.current.value;
    const newItem = {
      id: crypto.randomUUID(),
      name: itemValue,
      packed: false,
    };
    setItems((items) => [...items, newItem]);
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleItemAdd}>
      <h2>Add an Item</h2>
      <input ref={inputRef} type="text"></input>
      <Button>Add to List</Button>
    </form>
  );
}
