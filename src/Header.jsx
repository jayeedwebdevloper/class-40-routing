import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo"><h4>Logo</h4></div>
            <div className="menu">
                <ul className="main-menu">
                    <li className="nav-link"><Link onClick={homeClick} className="home active" to="/">Home</Link></li>
                    <li className="nav-link"><NavLink onClick={aboutClick} className='about' to="/about">About</NavLink></li>
                    <li className="nav-link"><NavLink onClick={contactClick} className='contact' to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </header>
    );
};

const homeClick = () => {
    document.querySelector('.home').classList.add('active');
    document.querySelector('.about').classList.remove('active');
    document.querySelector('.contact').classList.remove('active');
}
const aboutClick = () => {
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.about').classList.add('active');
    document.querySelector('.contact').classList.remove('active');
}
const contactClick = () => {
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.about').classList.remove('active');
    document.querySelector('.contact').classList.add('active');
}

export default Header;