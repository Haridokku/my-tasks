import './index.css'

const TagItem = props => {
  const {details, changeActiveTagBtn, isActive} = props
  const {optionId, displayText} = details
  const btnClassName = isActive ? 'active tagBtn' : 'tagBtn'
  const getActiveTag = () => {
    changeActiveTagBtn(optionId)
  }
  return (
    <li className="listItem">
      <button type="button" className={btnClassName} onClick={getActiveTag}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
