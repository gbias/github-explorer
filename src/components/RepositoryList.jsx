const repositoryName = 'unform2';

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>{repositoryName}</h1>

            <ul>
                <li>
                    <strong>unform</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar repositórios
                    </a>
                </li>
            </ul>
        </section>
    )
}