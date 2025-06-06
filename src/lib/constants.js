export const initialItems = [
  {
    id: crypto.randomUUID(),
    name: "good mood",
    packed: true,
  },
  {
    id: crypto.randomUUID(),
    name: "passport",
    packed: false,
  },
  {
    id: crypto.randomUUID(),
    name: "phone charger",
    packed: false,
  },
];

// This should be outside the component to avoid re-creating the array on each re-render.
// Good practice, but not a strict requirement.
export const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];
