import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function SideBar({ handleAddItem, setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup setItems={setItems} />
    </div>
  );
}
