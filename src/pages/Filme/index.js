import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

function Filme() {

    const { id } = useParams();

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "dc85c039f472e3ea27de04373f136526",
                    language: "pt-BR",
                }
            })
            .then((response)=> {
                console.log(response.data)
            })
            .catch(()=> {
                console.log("Filme não encontrado.")
            })
        }

        loadFilme()
    }, [])


    return (
        <div>
            <h1>acessando filme {id}</h1>
        </div>
    )
}

export default Filme;