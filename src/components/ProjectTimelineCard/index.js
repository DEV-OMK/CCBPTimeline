import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = project

  return (
    <div>
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="project-header">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="calender-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit" target="_new">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
