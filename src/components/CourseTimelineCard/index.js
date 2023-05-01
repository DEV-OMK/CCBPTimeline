import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, duration, tagsList} = course

  return (
    <div>
      <div className="course-header">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li key={tag.id} className="tag-item">
            <p className="tag">{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
