import './style.css';
import { NavLink } from 'react-router-dom';

const Project = ({img_src, project_title, id}) => {


    return (
        <li className="project project--visible">
            <NavLink to={`/project/${id}`}>
                <img src={img_src} alt="Project img" className="project__img" />
                <h3 className="project__title">{project_title}</h3>
            </NavLink>
        </li>
    )
}

export default Project;