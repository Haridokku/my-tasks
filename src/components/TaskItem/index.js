import './index.css'

const TaskItem = props => {
  const {details} = props
  const {task, type} = details
  return (
    <li className="listItem">
      <p className="taskHeading">{task}</p>
      <button type="button" className="taskBtn">
        {type}
      </button>
    </li>
  )
}
export default TaskItem
