import DrillChild1 from "./DrillChild1"

const DrillParent = () => {

    let str = "Hello World"

  return (
    <div>
        <h1>DrillParent</h1>

        <DrillChild1 str={str}/>
    </div>
  )
}

export default DrillParent