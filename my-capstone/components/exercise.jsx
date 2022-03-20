//const Exercise = ({ exercise: { bodyPart, gifUrl, name , id} }) => {
const Exercise = ({ exercise: {name, description, img, idDrink} }) => {
    const width = 300;
    const classArgs= "grid grid-cols-3";
    return (
      <>
              <div key={idDrink} className={classArgs}>
                      <th>{name}</th>
                      <th>{description}</th>
                      <td><img width={width} src={img}></img></td>
                      <th></th>
              </div>

      </>
    )
  }
  
  export default Exercise
  