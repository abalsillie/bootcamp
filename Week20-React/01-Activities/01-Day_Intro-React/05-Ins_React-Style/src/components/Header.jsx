// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      {/* refer directly to css class */}
      <h1>Home</h1>
    </header>
  );
}

export default Header;
