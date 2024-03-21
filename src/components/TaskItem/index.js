import './index.css'

const TaskItem = props => {
  const {details} = props
  const {task, type} = details
  return (
    <li className="listItem">
      <p className="taskHeading">{task}</p>
      <p className="taskType">{type}</p>
    </li>
  )
}
export default TaskItem
