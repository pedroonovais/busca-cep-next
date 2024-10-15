"use client"
import { useSearchParams } from "next/navigation";
import { Menu } from "../../components/Menu/menu";

export default function Busca(){
    const searchParams = useSearchParams();

    const cep = searchParams.get("cep")

    return <div>
        <Menu />
        <h1>Busca</h1>
        <p>Pesquisa pelo cep: {cep}</p>
    </div>
}