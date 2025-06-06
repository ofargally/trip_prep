import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  //MAP RETURNS an array and JSX can handle it. It's not a good practice to use index for keys.
  // React uses keys to identify which items have changed, are added, or are removed and keep trac of them across renders.
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}
