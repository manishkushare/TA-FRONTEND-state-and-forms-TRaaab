function Question(props){
  function handleClick(){
    return props.callbackFunction();
  }
  return (
    <li className="flex items-baseline">
      <span>{props.Q}</span>
      <span onClick={handleClick} className="text-5xl">
        {props.isClosed ? "👇🏽":"👆🏻"} 
        </span>
    </li>
    
    
  )
}


export default Question;