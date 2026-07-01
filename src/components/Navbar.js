import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">NFT Gallery</h1>

      <ul>
        <li>Home</li>
        <li>Explore</li>
        <li>Trending</li>
      </ul>
    </nav>
  );
}

export default Navbar;