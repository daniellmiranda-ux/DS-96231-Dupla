import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <h1>Clínica Maria Albano</h1>
                </Link>
            </div>

            <nav>
                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/servicos">
                    Serviços
                </NavLink>

                <NavLink to="/corpo-clinico">
                    Corpo Clínico
                </NavLink>

                <NavLink to="/quem-somos">
                    Quem Somos
                </NavLink>

                <NavLink to="/blog">
                    Blog
                </NavLink>

                <NavLink to="/contato">
                    Contato
                </NavLink>
            </nav>
        </header>
    );
}
