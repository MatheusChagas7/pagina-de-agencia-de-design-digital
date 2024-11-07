import estilos from "./SecaoBanner.module.css";
import Image from "next/image";
import imagemBanner from "/public/banner.jpg";

export default function SecaoBanner() {
    return (
        <div className={estilos.container_banner}>
            <div className={estilos.container_banner_imagem}>
                <Image className={estilos.banner_imagem} src={imagemBanner} alt="Banner"></Image>
            </div>
            <div className={estilos.container_banner_texto}>
                <div className={estilos.banner_texto}>
                    <p>BRANDING / UI / UX / TECNOLOGIA</p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
                </div>
            </div>
        </div>
    )
}