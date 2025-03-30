import Header from './../components/header/Header'

const Home = () => {

    return (
        <>
            <Header />

            <main className="section">
                <div className="container">
                    <h1 className="title-1">Skills</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>
                                JavaScript, React, HTML, CSS, Bootstrap, Git, GitHub, REST API, JSON, WebSockets
                            </p>

                        </li>

                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>
                                Node.js, Express, MongoDB, Mongoose, SQL, PostgreSQL, REST API, WebSockets
                            </p>

                        </li>

                    </ul>
                </div>

            </main>
        </>
    );
}

export default Home;