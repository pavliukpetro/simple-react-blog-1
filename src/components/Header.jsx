import react from '../assets/react.svg';

function Header() {
    return (
        <header className='header'>
            <a href="/" className="logo">
                <img src={react} alt="logo" width='24' /> <span className="fs-4">Simple Blog</span>
            </a>

            <ul className="nav">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            </ul>
        </header>
    );
}

export default Header;