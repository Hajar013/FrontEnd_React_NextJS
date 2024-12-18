import CourseList from '../courses-list/courses-list.component';
interface IProps{
    name:string,
    isGaduted:boolean,
    list:string[]
}
const Student = (props : IProps) => {
    console.log(props);
    return (
        <div>
            <h1>
              My name is {props.name} and is graduted :{props.isGaduted.toString()}
            </h1>
            <CourseList list={props.list}/>
        </div>
    )
}

export default Student