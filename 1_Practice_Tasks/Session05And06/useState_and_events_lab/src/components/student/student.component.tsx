import { useState } from 'react';
import CourseList from '../courses-list/courses-list.component';
import IStudent from './Istudent';
import './Student.css'
interface IProps extends IStudent{
    //for events 

    // Using an arrow function type
    onAbsentChange: (name: string, change: number) => void;

    // Using a named method type
    // onAbsentChange(name: string, change: number): void;
}

const Student = (props : IProps) => {
    const [absents,setabsents]=useState(0);
    const addAbsent=(): void =>{
        setabsents(absents+1);
        console.log(absents);
        props.onAbsentChange(props.name,+1)
    };
    const removeAbsent=(): void =>{
        if(absents>0){
            setabsents(absents-1);
            console.log(absents);  
            props.onAbsentChange(props.name,-1);
        }
    };
    const resetAbsent=(): void =>{
        setabsents(0);
        console.log(absents);  
        props.onAbsentChange(props.name,-absents);

    }
    console.log(props);
    return (
        <div className="student-card">
        <h1>
          My name is {props.name} and is graduated: {props.isGraduated.toString()}
        </h1>
        <p>
          Absents: <span>{absents}</span>
        </p>
        <button onClick={addAbsent}>Add Absent</button>
        <button onClick={removeAbsent}>Remove Absent</button>
        <button onClick={resetAbsent}>Reset Absent</button>
        <CourseList list={props.list} />
      </div>
  
    );
};

export default Student