import './dashboard.css';
import { ITodoItem } from '../types';

interface IProps {
  items: ITodoItem[];
}

const Dashboard = ({ items }: IProps) => {
  const totalTasks = items.length;
  const completedTasks = items.filter(item => item.isDone).length;
  const urgentTasks = items.filter(item => item.isUrgent).length;

  return (
    <div className="dashboard">
      <div>
        <b>{totalTasks}</b>
        <span>Created Tasks</span>
      </div>
      <div>
        <b>{completedTasks}</b>
        <span>Completed Tasks</span>
      </div>
      <div>
        <b>{urgentTasks}</b>
        <span>Urgent Tasks</span>
      </div>
    </div>
  );
};

export default Dashboard;
