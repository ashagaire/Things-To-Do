const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1> Things to do</h1>
      {!showAdd && (
        <button className="btn" onClick={onAdd}>
          Add
        </button>
      )}
    </header>
  );
};

export default Header;
