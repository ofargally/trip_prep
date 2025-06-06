import { initialItems, secondaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup({ setItems }) {
  //MAP RETURNS an array and JSX can handle it. It's not a good practice to use index for keys.
  // React uses keys to identify which items have changed, are added, or are removed and keep trac of them across renders.
  const handleMarkAllCompleted = () => {
    setItems((items) => {
      return items.map((item) => {
        return { ...item, packed: true };
      });
    });
  };

  const handleMarkAllIncomplete = () => {
    setItems((items) => {
      return items.map((item) => {
        return { ...item, packed: false };
      });
    });
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleButtonClick = (text) => {
    if (text === "Mark all as complete") {
      return handleMarkAllCompleted;
    }
    if (text === "Mark all as incomplete") {
      return handleMarkAllIncomplete;
    }
    if (text === "Reset to initial") {
      return handleResetToInitial;
    }
    if (text === "Remove all items") {
      return handleRemoveAllItems;
    }
    return;
  };
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button onClick={handleButtonClick(text)} key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}
