import { Link } from "react-router-dom";
import "./header.scss";
import MenuIcon from '@mui/icons-material/Menu';



function Header (props) {
  return (
    <header className="header container">
      <div className="header__start" >
        <Link className="header__logo header__link" to="/">Aqua Go</Link>
      </div>
      <div className="header__end" >
        <Link to="/" className="header__link">Home</Link>
        <Link to="/calculations" className="header__link">Calculations</Link>
        <Link to="/about" className="header__link">About</Link>
        <MenuIcon className="header__barsIcon" fontSize="large" />
      </div>
    </header>
  )
}

export default Header;