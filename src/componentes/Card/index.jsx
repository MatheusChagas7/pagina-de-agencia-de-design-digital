import estilos from "./Card.module.css";

export default function Card(props) {

    const temaContainerCard = props.controle ? estilos.card_dark : estilos.card_light;
    const temaSubtituloCard = props.controle ? estilos.h2_dark : estilos.h2_light;

    return (
        <div className={temaContainerCard}>
            <h4>{props.data}</h4>
            <h2 className={temaSubtituloCard}>{props.titulo}</h2>
            <span>{props.empresa}</span>
            <p>{props.atividade}</p>
        </div>
    )
}