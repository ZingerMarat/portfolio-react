

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>
                            Israel
                        </p>

                    </li>

                    <li className="content-list__item">
                        <h2 className="title-2">E-mail</h2>
                        <p>
                            <a href="mailto:zingermarat@gmail.com">
                                zingermarat@gmail.com
                            </a>
                        </p>

                    </li>

                </ul>
            </div>
        </main>

    );
}
export default Contacts;