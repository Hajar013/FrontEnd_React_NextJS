import './courses-list.css'

interface IProps{
    list:string[]
}
const CourseList=(props : IProps)=>{
    return(
        <ul className="course-list">
        {props.list.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
        )
}
export default CourseList