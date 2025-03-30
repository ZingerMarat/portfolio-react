import project01 from '../img/projects/01.jpg';
import project02 from '../img/projects/02.jpg';
import project03 from '../img/projects/03.jpg';
import project04 from '../img/projects/04.jpg';
import project05 from '../img/projects/05.jpg';


const Projects = () => {

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>

                <ul className="projects">
                    <li className="project project--visible">
                        <a href="./project-page.html">
                            <img src={project01} alt="Project img" className="project__img" />
                            <h3 className="project__title">Gaming streaming portal</h3>
                        </a>
                    </li>
                    <li className="project project--visible">
                        <a href="./project-page.html ">
                            <img src={project02} alt="Project img" className="project__img" />
                            <h3 className="project__title">Online store</h3>
                        </a>
                    </li>
                    <li className="project project--visible">
                        <a href="./project-page.html">
                            <img src={project03} alt="Project img" className="project__img" />
                            <h3 className="project__title">Social network</h3>
                        </a>
                    </li>
                    <li className="project project--visible">
                        <a href="./project-page.html">
                            <img src={project04} alt="Project img" className="project__img" />
                            <h3 className="project__title">Personal blog</h3>
                        </a>
                    </li>
                    <li className="project project--visible">
                        <a href="./project-page.html">
                            <img src={project05} alt="Project img" className="project__img" />
                            <h3 className="project__title">Online courses</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </main>

    )
}

export default Projects;
