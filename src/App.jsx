import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);
  console.log(items);
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList setItems={setItems} items={items} />
        <SideBar setItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
