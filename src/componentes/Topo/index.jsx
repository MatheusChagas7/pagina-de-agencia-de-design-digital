'use client';
import {useState} from "react";
import estilos from "./Topo.module.css";
import Image from "next/image";
import Logo from "/public/logo.png";
import iconeLight from "/public/sun.png";
import iconeDark from "/public/moon.png";


export default function Topo(props) {

    const temaTopo = props.controle ? estilos.container_topo_dark : estilos.container_topo_light
    const btn_tema = props.controle ? estilos.btn_troca_tema_dark  : estilos.btn_troca_tema_light
    const icone_btn_tema = props.controle ? iconeLight : iconeDark

    function trocaTema() {
        console.log(props.controle)
        props.setControle(!props.controle);
        props.controle ? props.setTema(props.temaLight) : props.setTema(props.temaDark);
    }

    return (
        <header className={temaTopo}>
            <Image className={estilos.logo} src={Logo} alt="logo"></Image>
            <button onClick={trocaTema} className={btn_tema}>
                <Image className={estilos.icone_tema_dark} src={icone_btn_tema} alt="icone troca tema"></Image>
            </button>
        </header>
    )
}