import './style.css';

const Project = ({img_src, project_title}) => {
    return (
        <li className="project project--visible">
            <a href="./project-page.html">
                <img src={img_src} alt="Project img" className="project__img" />
                <h3 className="project__title">{project_title}</h3>
            </a>
        </li>
    )
}

export default Project;