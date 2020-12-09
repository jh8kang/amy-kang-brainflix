import './Header.scss';
import logo from '../../assets/logo/logo.svg';
import searchlogo from '../../assets/Icons/SVG/search.svg'


function Header() {
  return (
    <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <input type="text" className = "header__search" placeholder ="Search"></input>


    </header>
  );
}

export default Header;