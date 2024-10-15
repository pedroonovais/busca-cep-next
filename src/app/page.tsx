"use client";
import { Menu } from "@/components/Menu/menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const router = useRouter();

    const [cep, setCep] = useState<string>("");

    const handleChange = (event: any) => {
        setCep(event.target.value);
    };

    const handleClick = () => {
        router.push(`/busca?cep=${cep}`);
    };

    const handleClickParams = () => {
        router.push(`/busca-cep/${cep}`);
    };

    return (
        <main>
            <Menu />
            <form>
                <label htmlFor="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="Digite seu cep"
                    onChange={handleChange}
                />
                <button type="button" onClick={handleClick}>
                    Pesquisar
                </button>
                <hr />
                <button type="button" onClick={handleClickParams}>
                    Pesquisar
                </button>
            </form>
        </main>
    );
}
