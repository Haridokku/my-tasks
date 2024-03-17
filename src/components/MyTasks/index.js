import {Component} from 'react'
import {v4} from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    searchInput: '',
    activeTag: tagsList[0].optionId,
    tasksList: [],
    activeTagBtn: '',
  }

  changeActiveTagBtn = id => {
    const {activeTagBtn} = this.state
    if (id === activeTagBtn) {
      this.setState({activeTagBtn: ''})
    } else {
      this.setState({activeTagBtn: id})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeTag = event => {
    this.setState({activeTag: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()
    const {searchInput, activeTag} = this.state
    const taskObject = {
      id: v4(),
      task: searchInput,
      type: activeTag,
    }
    console.log(taskObject)
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, taskObject],
      searchInput: '',
      activeTag: tagsList[0].optionId,
    }))
  }

  getFilteredList = tasksList => {
    const {activeTagBtn} = this.state
    console.log(activeTagBtn)
    const updatedList = tasksList.filter(each =>
      each.type.includes(activeTagBtn),
    )

    return updatedList
  }

  render() {
    const {searchInput, activeTag, tasksList, activeTagBtn} = this.state
    const filterTaskList = this.getFilteredList(tasksList)
    return (
      <div className="appContainer">
        <form className="formContainer" onSubmit={this.onAddTask}>
          <h1 className="head">Create a task!</h1>
          <label htmlFor="task" className="taskLabel">
            Task
          </label>
          <input
            type="text"
            className="inputText"
            placeholder="Enter the task here"
            id="task"
            value={searchInput}
            onChange={this.onChangeInput}
          />
          <label htmlFor="tags" className="taskLabel">
            Tags
          </label>
          <select
            id="tags"
            className="selectContainer"
            value={activeTag}
            onChange={this.onChangeTag}
          >
            {tagsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
          <button type="submit" className="addBtn">
            Add Task
          </button>
        </form>
        <div className="tagsAndTasksContainer">
          <h1 className="tagsHeading">Tags</h1>
          <ul className="unorderedList">
            {tagsList.map(each => (
              <TagItem
                key={each.optionId}
                details={each}
                changeActiveTagBtn={this.changeActiveTagBtn}
                isActive={each.optionId === activeTagBtn}
              />
            ))}
          </ul>
          <h1 className="tagsHeading">Tasks</h1>
          {filterTaskList.length === 0 && (
            <p className="noTasks">No Tasks Added Yet</p>
          )}
          <ul className="taskContainer">
            {filterTaskList.map(each => (
              <TaskItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyTasks
