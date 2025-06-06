import { initialItems } from "../lib/constants";
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
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      handler: handleMarkAllCompleted,
    },
    {
      text: "Mark all as incomplete",
      handler: handleMarkAllIncomplete,
    },
    {
      text: "Reset to initial",
      handler: handleResetToInitial,
    },
    {
      text: "Remove all items",
      handler: handleRemoveAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, handler }) => {
        return (
          <Button onClick={handler} key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}
