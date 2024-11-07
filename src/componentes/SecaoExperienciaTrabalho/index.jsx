import estilos from "./SecaoExperienciaTrabalho.module.css";

export default function SecaoExperienciaTrabalho(props) {

    const temaContainerExperiencias = props.controle ? estilos.container_experiencias_dark : estilos.container_experiencias_light;
    const temaSubTituloExperiencias = props.controle ? estilos.h2_dark : estilos.h2_light;
    const temaPExperiencias = props.controle ? estilos.p_dark : estilos.p_ligth;

    return (
        <div className={temaContainerExperiencias}>
            <div className={estilos.texto_experiencias}>
                <h2 className={temaSubTituloExperiencias}>Experiências De Trabalho</h2>
                <span></span>
                <p className={temaPExperiencias}>
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div className={estilos.container_cards_experiencias}>
                {props.children}
            </div>
        </div>
    )
}