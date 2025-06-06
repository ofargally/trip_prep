/* eslint-disable react/prop-types */
export default function Button({ type, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
