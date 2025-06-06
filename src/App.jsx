import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);
  const numItemsPacked = items.filter((item) => item.packed).length;
  const totalItems = items.length;

  const handleAddItem = (itemValue) => {
    const newItem = {
      id: crypto.randomUUID(), // or Date().getTime() ==> returns milliseconds since 1970
      name: itemValue,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  console.log(items);
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header totalItems={totalItems} numItemsPacked={numItemsPacked} />
        <ItemList setItems={setItems} items={items} />
        <SideBar handleAddItem={handleAddItem} setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
