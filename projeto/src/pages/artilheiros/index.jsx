import "./style.css";

function Artilheiros() {
    const jogadores = [
    { nome: "Miroslav Klose", gols: 16 },
    { nome: "Ronaldo Fenômeno", gols: 15 },
    { nome: "Gerd Müller", gols: 14 },
    ];

    return (
    <div className="artilheiros-container">
        <h1>Artilheiros</h1>

        {jogadores.map((jogador, index) => (
        <div key={index} className="card-artilheiro">
            <h2>{jogador.nome}</h2>
            <p>{jogador.gols} gols</p>
        </div>
        ))}
    </div>
    );
}

export default Artilheiros;