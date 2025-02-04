const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1> Things to do</h1>
      <button
        style={
          showAdd
            ? { backgroundColor: "darkred" }
            : { backgroundColor: "green" }
        }
        className="btn"
        onClick={onAdd}
      >
        {showAdd ? "Close" : "Add"}
      </button>
    </header>
  );
};

export default Header;
