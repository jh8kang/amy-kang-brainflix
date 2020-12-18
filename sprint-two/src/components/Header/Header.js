import './Header.scss';
import logo from '../../assets/logo/logo.svg';
import search from '../../assets/Icons/SVG/search.svg';
import upload from '../../assets/Icons/SVG/upload.svg';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <Link to="/">
          <img alt="logo" src={logo} className="header__logo" alt="logo" />
        </Link>
        <form className = "form">
          <input type="text" className = "form__search" placeholder ="Search"></input>
          <img alt="magnifier"src={search} className ="form__search-logo"></img>
          <div className="form__upload">
            <div className="form__upload-button">
              <Link to="/upload">
                <button type="submit" className = "form__upload-button-text">UPLOAD</button>
              </Link>
              <img alt="plus"src={upload} className ="form__upload-button-logo"></img>
            </div>
            <div alt="profile picture" className="form__profile"></div>
          </div>
        </form>
    </header>
  );
}

export default Header;