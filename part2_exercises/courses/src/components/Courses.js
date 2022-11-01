const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part =>
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>)}
      </div>
    )
  }
  
   
  const Total = (props) => {
    var exercises = props.parts.map((part) => part.exercises)
    const sum = exercises.reduce((previous, current) => previous + current, 0)
    return (
      <div>Total of {sum} exercises</div>
    )
  }
  
  
  const Course = (props) => {
    return (
      <div>
        <Header course={props.course.name} id={props.course.id}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
      </div>
    )
  }
  
  const Courses = (props) => {
    return (
      <div>
        {props.courses.map(course =>
          <Course key={course.id} course={course}/>  
          )}
      </div>
    )
  }

  export default Courses