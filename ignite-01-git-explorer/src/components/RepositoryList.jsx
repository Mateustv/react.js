import {useState, useEffect} from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

const repository = {
    name: "unform",
    description: "Forms in React",
    link:'https://github.com/unform/unform',
}

export function RepositoryList () {
    const [repositories,setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(res => res.json())
        .then(data =>  setRepositories(data))
    },[])
    console.log(repositories)

    return(
        <section>
            <h1>
                Lista de Repositorios
            </h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key = {repository.name} repository = {repository}/>
                })}
            </ul>
        </section>
    )
}