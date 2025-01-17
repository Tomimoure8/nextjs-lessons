'use client';
import Head from 'next/head';
import {ContadorButton} from "./page1/pagee";
import { Header } from "./componentes/ui/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Practica de Netxjs</title>
        <meta name="description" content="App de muestra en next JS" />
        <meta name="keywords" content="Coderhouse, Nextjs, Versel, SSR" />
      </Head>
      <Header/>
      <ContadorButton/>
      {/* <OtroButton/> */}
    </>
  );
}
