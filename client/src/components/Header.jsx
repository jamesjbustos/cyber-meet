import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-title">
        <h1>CyberMeet</h1>
      </Link>
      <p>
        Explore tech events around the world, and meet people who share your
        interests.
      </p>
    </header>
  );
};

export default Header;
