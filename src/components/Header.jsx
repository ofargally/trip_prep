import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ numItemsPacked, totalItems }) {
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItems} numItemsPacked={numItemsPacked} />
    </header>
  );
}
