import Project from '../components/project/project';
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
                    {/* 
                    projects.map((project, index) => (
                        <Project key={index} img_src={project.img_src} project_title={project.project_title} id={project.id}/>
                    ))
                    */}
                    <Project img_src={project01} project_title="Project 1" id="1"/>
                    <Project img_src={project02} project_title="Project 2" id="2"/>
                    <Project img_src={project03} project_title="Project 3" id="3"/>
                    <Project img_src={project04} project_title="Project 4" id="4"/>
                    <Project img_src={project05} project_title="Project 5" id="5"/>
                </ul>

                
            </div>
        </main>

    )
}

export default Projects;
