function Image(props){
  // console.log(props)
  function handleClick(name){
    return props.callback(name);
  }
  
  return (
    <ul className="people grid grid-cols-5 gap-4 justify-items-center">
      {
        props.data.reduce((acc,cv) => {
          let people = cv.people.map((person) => {
            // console.log(person)
            return (
              <li className="w-64 h-64 p-4">
                <img onClick={()=> handleClick(cv.name)} className="w-full" src={person.image} alt={cv.name}/>
                <h2>{cv.name}</h2>

              </li>
              
            )
          })
          acc.push(people);
          console.log(acc,"hey")
          return acc;
        },[])
      }
      
    </ul>
  )
}

export default Image;