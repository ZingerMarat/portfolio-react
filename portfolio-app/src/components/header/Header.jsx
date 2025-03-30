import './style.css'

const Header = () => {

    return (
        <header className="header">
            <div className="header_wrapper">
                <h1 className="header_title">
                    <strong>Hi, my name is <em>Marat</em></strong><br />
                    a software developer
                </h1>

                <div className="header__text">
                    <p>
                        with a passion for creating and developing web applications
                    </p>
                </div>

                <a href="#!" className="btn">Download CV</a>
            </div>
        </header>

    )
}

export default Header