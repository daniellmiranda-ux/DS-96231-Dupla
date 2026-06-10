import './style.css'

export default function Footer() {
    return (
        <footer>
            <strong>Fifa Copa do Mundo</strong>
            <p>Copyright &copy;{new Date().getFullYear()} - Todos os direitos reservados.</p>
        </footer>
    )
}