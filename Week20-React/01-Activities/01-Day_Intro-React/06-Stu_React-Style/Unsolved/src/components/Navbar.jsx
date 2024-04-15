// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  navStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar" style={styles.navStyle}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
