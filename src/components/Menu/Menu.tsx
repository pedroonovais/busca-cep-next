import Link from "next/link";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/busca">Buscar</Link>
                </li>
            </ul>
        </nav>
    );
};
