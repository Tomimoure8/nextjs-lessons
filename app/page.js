'use client';
import {ContadorButton} from "./page1/pagee";
import { OtroButton } from "./page2/page2";
import { Header } from "./componentes/ui/Header";


export default function Home() {
  return (
    <>
      <Header/>
      <ContadorButton/>
      {/* <OtroButton/> */}
    </>
  );
}
