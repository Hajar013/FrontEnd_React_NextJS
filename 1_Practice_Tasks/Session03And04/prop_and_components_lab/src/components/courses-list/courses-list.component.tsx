
interface IProps{
    list:string[]
}
const CourseList=(props : IProps)=>{
    return(
        <div>
         <ul>
            <li>{props.list[0]}</li>
            <li>{props.list[1]}</li>
            <li>{props.list[2]}</li>
         </ul>
        </div>
    )
}
export default CourseList