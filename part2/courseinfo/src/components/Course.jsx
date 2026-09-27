const Course = ({ course }) => {
    
    return (
    <div>
      {/* Build Header, Content, and Part here. */}
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => {
            return (
                <li key={part.id}>
                {part.name} {part.exercises}
                </li>
            )  
        })}
      </ul>
      <p>Total: {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
      </p>
    </div>
  )
}

export default Course
