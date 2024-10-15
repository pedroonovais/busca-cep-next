import { Menu } from "@/components/Menu/menu";

export default async function BuscaCepParams({params: {cep}}){
    const response = await fetch(`https://brasilapi.com,br/api/cep/v2/${cep}`)

    console.log(response)
    
    return(
        <div>
            <Menu />
            <h1>Busca com parametros</h1>
            <p>Resultado da busca pelo cep: {cep}</p>
        </div>
    )
}