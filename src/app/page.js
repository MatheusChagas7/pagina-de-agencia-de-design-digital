'use client';
import { useState } from "react";

import estilos from "./page.module.css";
import Topo from "@/componentes/Topo";
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "@/componentes/SecaoExperienciaTrabalho";
import Card from "@/componentes/Card";
import Rodape from "@/componentes/Rodape";

import icoFacebook from "/public/facebook.png"
import icoTwitter from "/public/twitter.png"
import icoLinkedin from "/public/linkedin.png"
import icoDribble from "/public/dribble.png"
import icoBehance from "/public/behance.png"
import icoGoogle from "/public/Google.png"


export default function Home() {

  const temaLight = estilos.container_pagina_light;
  const temaDark = estilos.container_pagina_dark;

  const experiencias = [
    { data: "JUNHO 2012 - 2016", titulo: "Web Designer", empresa: "Pied Piper StartUp.", atividade: "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores" },
    { data: "AGOSTO 2016 - 2019", titulo: "Product Designer", empresa: "E Corp.", atividade: "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra" },
    { data: "FEVEREIRO 2019 - 2021", titulo: "Digital Consulting", empresa: "Arasaka Inc.", atividade: "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução" },
  ]

  const [tema, setTema] = useState(temaLight);
  const [controle, setControle] = useState(true);

  return (
    <div className={tema}>

      {/*Topo*/}
      <Topo
        temaLight={temaLight}
        temaDark={temaDark}
        setTema={setTema}
        controle={controle}
        setControle={setControle}
      />

      {/*Conteudo principal*/}
      <main className={estilos.main}>

        {/*Seção Banner*/}
        <SecaoBanner />

        {/*Seção Experiência de Trabalho */}
        <SecaoExperienciaTrabalho controle={controle}>

          <Card
            controle={controle}
            data={experiencias[0].data}
            titulo={experiencias[0].titulo}
            empresa={experiencias[0].empresa}
            atividade={experiencias[0].atividade}
          />

          <Card
            controle={controle}
            data={experiencias[1].data}
            titulo={experiencias[1].titulo}
            empresa={experiencias[1].empresa}
            atividade={experiencias[1].atividade}
          />

          <Card
            controle={controle}
            data={experiencias[2].data}
            titulo={experiencias[2].titulo}
            empresa={experiencias[2].empresa}
            atividade={experiencias[2].atividade}
          />


        </SecaoExperienciaTrabalho >

        {/* Rodapé */}
        <Rodape 
          icoFacebook={icoFacebook}
          icoTwitter={icoTwitter}
          icoLinkedin={icoLinkedin}
          icoDribble={icoDribble}
          icoBehance={icoBehance}
          icoGoogle={icoGoogle}
        />
      </main>


    </div>
  );
}
