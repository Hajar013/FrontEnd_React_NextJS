import './App.css'
import Student from './components/student/student.component';
const courseList : string[]= ['React', 'HTML', 'CSS'];

function App(){
  return(
    <div>
      <h1>Welcome GSG react </h1>
      <Student name='Hajar Ihab' isGaduted={true} list={courseList}/>
      <Student name='Sara Ihab' isGaduted={false} list={courseList} />
      <Student name='Abd Ihab' isGaduted={true} list={courseList} />
      <Student name='Jullo Ihab' isGaduted={false} list={courseList} />
      <Student name='sham Ihab' isGaduted={false} list={courseList} />
      <Student name='sham gassan' isGaduted={false} list={courseList} />
    </div>

  )
}

export default App