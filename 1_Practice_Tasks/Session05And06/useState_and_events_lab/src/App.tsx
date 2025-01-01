import { useState } from 'react';
import './App.css'
import Student from './components/student/student.component';
import IStudent from './components/student/Istudent';
const courseList : string[]= ['React', 'HTML', 'CSS'];

function App(){
  const INITIAL_LIST_STUDENT = [
    { id: 1, name: 'Hajar Ihab', isGraduated: true, list: courseList },
    { id: 2, name: 'Sara Ihab', isGraduated: false, list: courseList },
    { id: 3, name: 'Abd Ihab', isGraduated: true, list: courseList },
    { id: 4, name: 'Jullo Ihab', isGraduated: false, list: courseList },
    { id: 5, name: 'Sham Ihab', isGraduated: false, list: courseList },
    { id: 6, name: 'Sham Gassan', isGraduated: false, list: courseList },
  ];
  
  const [totalAbsents,setTotalAbsents]=useState(0);
  const [studentlist,setStudentlist]=useState<IStudent[]>(INITIAL_LIST_STUDENT);

  const handleAbsentChange=(name:string,change:number)=>{
  console.log(`name: ${name} change:${change}`);
  setTotalAbsents(totalAbsents+change);
  }
  return(
    <div>
      <h1>Welcome GSG React</h1>
      <p>Total Absents: {totalAbsents}</p>
      {studentlist.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          isGraduated={student.isGraduated}
          list={student.list}
          onAbsentChange={handleAbsentChange}
        />
      ))}
    </div>

  )
}

export default App