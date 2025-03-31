import './style.css'
import githubIcon from '../../img/icons/github.svg';

const GitHubButton = ({ref}) => {
    return (
        <a href={ref} target ="_blank" className="btn-outline">
            <img src={githubIcon} alt="github" />
            view on GitHub
        </a>
    )
}

export default GitHubButton