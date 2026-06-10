import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <h1>Copa do mundo 2026</h1>
                </Link>
            </div>

            <nav>
                <NavLink>
                    <Link to="/">Home</Link>
                </NavLink>
                <NavLink>
                    <Link to="/sobre-nos">Sobre nós</Link>
                </NavLink>
            </nav>
        </header>
    )
}