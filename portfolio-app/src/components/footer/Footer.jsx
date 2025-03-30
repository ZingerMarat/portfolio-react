import './style.css'
import github from '../../img/icons/github.svg'
import linkedIn from '../../img/icons/linkedIn.svg'


const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!" className="social__link">
                                <img src={linkedIn} alt="linkedIn" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!" className="social__link">
                                <img src={github} alt="github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer