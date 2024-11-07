import estilos from "./Rodape.module.css";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Rodape(props) {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.container_fale_conosco}>
                <Image src={logo} alt="Logo rodapé"></Image>
                <p>
                    Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.
                </p>
                <div className={estilos.container_redes_sociais}>
                    <Image src={props.icoFacebook} alt="Ione Facebook"></Image>
                    <Image src={props.icoTwitter} alt="Ione Twitter"></Image>
                    <Image src={props.icoLinkedin} alt="Ione Linkedin"></Image>
                    <Image src={props.icoDribble} alt="Ione Dribble"></Image>
                    <Image src={props.icoBehance} alt="Ione Behance"></Image>
                    <Image src={props.icoGoogle} alt="Ione Google"></Image>
                </div>
            </div>
            <div className={estilos.autor}>
                    <p>
                        Copyright 2024 <span>Matheus Chagas</span>
                    </p>
                </div>
        </footer>
    )
}