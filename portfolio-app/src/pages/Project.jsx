import { useParams } from 'react-router-dom';
import img from '../img/projects/01-big.jpg';
import GitHubButton from '../components/buttons/GitHubButton';
import WebSiteButton from '../components/buttons/WebSiteButton';

const Project = () => {
    const { id } = useParams();
    console.log('project id:', id);
    // const project = projects.find((project) => project.id === id);

    //object of project
    const project = {
        id: 1,
        title: 'Gaming streaming portal',
        desc: 'This is a gaming streaming portal that allows users to watch live streams of their favorite games.',
        technologies: 'HTML, CSS, JavaScript, Node.js, Express.js, MongoDB.',
        img: img,
        github: 'https://github.com',
        website: 'https://www.example.com',
    };



    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img src={img} alt="" className="project-details__cover" />

                    <div className="about-project-wrapper">
                        <div className="project-details__desc">
                            <p>{project.desc}</p>
                        </div>

                        <div className="project-details__tech">
                            <h3 className="project-details__tech_technologies">Technologies: </h3>
                            <p>{project.technologies}</p>
                        </div>

                    </div>

                    <div className="project-links">
                        {project.github && (<GitHubButton ref={project.github}/>)}
                        {project.website && (<WebSiteButton ref={project.website}/>)}
                    </div>

                </div>

            </div>
        </main>

    )
}

export default Project;