export default function Coin({ onClick, children }) {

  return (
    <button className="Coin" onClick={onClick}>
      {children}
    </button>
  );
}
