import './Header.scss';
import logo from '../../assets/logo/logo.svg';
import search from '../../assets/Icons/SVG/search.svg';
import upload from '../../assets/Icons/SVG/upload.svg';


function Header() {
  return (
    <header className="header">
        <img alt="logo" src={logo} className="header__logo" alt="logo" />
        <form className = "form">
          <input type="text" className = "form__search" placeholder ="Search"></input>
          <img alt="magnifier"src={search} className ="form__search-logo"></img>
          <div className="form__upload">
            <button type="submit" className = "form__upload-button">UPLOAD</button>
            <img alt="plus"src={upload} className ="form__upload-logo"></img>
            <div alt="profile picture" className="form__profile"></div>
          </div>
        </form>
    </header>
  );
}

export default Header;