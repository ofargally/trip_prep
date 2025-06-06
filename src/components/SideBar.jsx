import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function SideBar({ setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems} />
      <ButtonGroup />
    </div>
  );
}
