const Exercise = ({ exercise: { bodyPart, gifUrl, name , id} }) => {
    const width = 300;
    const classArgs= "grid grid-cols-3";
    return (
      <>
              <div key={id} className={classArgs}>
                      <th>{bodyPart}</th>
                      <th>{name}</th>
                      <td><img width={width} src={gifUrl}></img></td>
                      <th></th>
              </div>

      </>
    )
  }
  
  export default Exercise
  