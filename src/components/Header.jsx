import logo from '../assets/sun.jpeg';
import { Link } from 'react-router-dom';


function Header() {

    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt='umwezi logo' />

                </div>
                <ul className="nav-links">
                    <li>
                        <a href="tel:+250792423907" className='nav-links_link'>Tel:+250792423907</a>
                    </li>
                    <li>
                        <Link to="#" className='nav-links_link btn'>Sign-In</Link>
                    </li>

                </ul>

            </nav>
            <div className='category'>
                <ul className='category-links'>
                    <li><a href="@" className='category-links--link'>Ubuzima</a></li>
                    <li><a href="@" className='category-links--link'>Politike</a></li>
                    <li><a href="@" className='category-links--link'>Ubukungu</a></li>
                    <li><a href="@" className='category-links--link'>Uburezi</a></li>
                    <li><a href="@" className='category-links--link'>Iyobokamana</a></li>
                    <li><a href="@" className='category-links--link'>Imikino</a></li>
                </ul>
            </div>
        </>



    )
}
export default Header;