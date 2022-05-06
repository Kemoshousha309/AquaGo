import { Link } from "react-router-dom";
import "./header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { PureComponent } from "react";

class Header extends PureComponent {
  state = {
    drawerOpen: false ,
  };
  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };
  render() {
    const {
      state: { drawerOpen },
      toggleDrawer,
    } = this;
    return (
      <header className="header container">
        <div className="header__start">
          <Link className="header__logo header__link" to="/">
            Aqua Go
          </Link>
        </div>
        <div className="header__end">
          <Link to="/" className="header__link">
            Home
          </Link>
          <Link to="/calculations" className="header__link">
            Calculations
          </Link>
          <Link to="/about" className="header__link">
            About
          </Link>
          <MenuIcon
            onClick={toggleDrawer}
            className="header__barsIcon"
            fontSize="large"
          />
        </div>
        <Drawer open={drawerOpen} onClose={toggleDrawer}>
          <div className="drawer-content">
            <Link to="/" className="header__link">
              Home
            </Link>
            <Link to="/calculations" className="header__link">
              Calculations
            </Link>
            <Link to="/about" className="header__link">
              About
            </Link>
          </div>
        </Drawer>
      </header>
    );
  }
}

export default Header;
