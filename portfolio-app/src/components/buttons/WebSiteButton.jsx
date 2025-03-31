import './style.css'
import websiteIcon from '../../img/icons/website.svg';

const GitHubButton = ({ ref }) => {
    return (
        <a href={ref} target ="_blank" className="btn-outline">
            <img src={websiteIcon} alt="website" />
            view website
        </a>
    )
}

export default GitHubButton