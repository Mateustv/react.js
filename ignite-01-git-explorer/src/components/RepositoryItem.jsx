export function RepositoryItem (props) {
    return(
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>
                Assesar repositorio
            </a>
        </li>
    )
}