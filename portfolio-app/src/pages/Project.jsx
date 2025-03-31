import img from '../img/projects/01-big.jpg';
import githubIcon from '../img/icons/github.svg';
import websiteIcon from '../img/icons/website.svg';
import GitHubButton from '../components/buttons/GitHubButton';
import WebSiteButton from '../components/buttons/WebSiteButton';

const Project = () => {
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">Gaming streaming portal</h1>

                    <img src={img} alt="" className="project-details__cover" />

                    <div className="about-project-wrapper">
                        <div className="project-details__desc">
                            <p>
                                This is a gaming streaming portal that allows users to watch live streams of their favorite games.
                            </p>
                        </div>

                        <div className="project-details__tech">
                            <h3 className="project-details__tech_technologies">Technologies: </h3>
                            <p>
                                HTML, CSS, JavaScript, Node.js, Express.js, MongoDB.
                            </p>
                        </div>

                    </div>

                    <div className="project-links">
                        <GitHubButton ref="#!" />
                        <WebSiteButton ref="#!" />
                    </div>

                </div>

            </div>
        </main>

    )
}

export default Project;