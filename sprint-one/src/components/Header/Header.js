import './Header.scss';
import logo from '../../assets/logo/logo.svg';
import search from '../../assets/Icons/SVG/search.svg';
import upload from '../../assets/Icons/SVG/upload.svg';


function Header() {
  return (
    <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <form className = "form">
          <input type="text" className = "form__search" placeholder ="Search"></input>
          <img src={search} className ="form__search-logo"></img>
          <div className="form__upload">
            <div>
            <button type="submit" className = "form__upload-button">UPLOAD</button>
            <img src={upload} className ="form__upload-logo"></img>

            </div>
            <div className="form__profile"></div>
          </div>
        </form>
    </header>
  );
}

export default Header;