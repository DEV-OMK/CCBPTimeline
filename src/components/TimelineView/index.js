import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <div className="responsive-container">
        <h1 className="timeline-title1">MY JOURNEY OF</h1>
        <h1 className="timeline-title2">CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            theme={{
              secondary: '#ffffff',
            }}
          >
            {timelineItemsList.map(item => {
              if (item.categoryId === 'COURSE') {
                return <CourseTimelineCard key={item.id} course={item} />
              }
              return <ProjectTimelineCard key={item.id} project={item} />
            })}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
