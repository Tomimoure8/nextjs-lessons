'use client';
import {ContadorButton} from "./page1/pagee";
import { OtroButton } from "./page2/page2";
import { Header } from "./componentes/ui/Header";

export const metadata = {
  title: "Practica de Nextjs",
  Description: "App de muestra en next JS",
  keywords: ["Coderhouse", "Nextjs", "Versel", "SSR" ],
}

export default function Home() {
  return (
    <>
      <Header/>
      <ContadorButton/>
      {/* <OtroButton/> */}
    </>
  );
}
