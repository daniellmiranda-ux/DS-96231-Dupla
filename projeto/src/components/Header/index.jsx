import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <h1>Copa do Mundo 2026</h1>
                </Link>
            </div>

            <nav>
                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/campeoes">
                    Campeões
                </NavLink>

                <NavLink to="/artilheiros">
                    Artilheiros
                </NavLink>
            </nav>
        </header>
    );
}
