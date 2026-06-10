import "./style.css";

function Campeoes() {
    const campeoes = [
    {
        time: "Brasil",
        titulos: 5,
    },
    {
        time: "Alemanha",
        titulos: 4,
    },
    {
        time: "Itália",
        titulos: 4,
    },
    ];

    return (
    <div className="campeoes-container">
        <h1>Campeões do Mundo</h1>

        {campeoes.map((campeao, index) => (
        <div key={index} className="card-campeao">
            <h2>{campeao.time}</h2>
            <p>{campeao.titulos} títulos</p>
        </div>
        ))}
    </div>
    );
}

export default Campeoes;