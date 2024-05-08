const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./logo.png" alt="application logo" />
        <h1>Today I learnt</h1>
      </div>
      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
};

export default Header;
