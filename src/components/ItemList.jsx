//ul -> unordered list, ol -> ordered list

import EmptyView from "./EmptyView";

export default function ItemList({ setItems, items }) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items &&
        items.map((item) => {
          return <Item setItems={setItems} key={item.id} item={item} />;
        })}
    </ul>
  );
}

function Item({ setItems, item }) {
  const handleCheckboxChange = () => {
    setItems((items) => {
      return items.map((i) => {
        if (i.id === item.id) {
          return { ...i, packed: !i.packed };
        }
        return i;
      });
    });
  };
  const handleDeleteItem = () => {
    setItems((items) => {
      return items.filter((i) => i.id !== item.id);
    });
  };
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={handleCheckboxChange}
        />
        {item.name}
      </label>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}
