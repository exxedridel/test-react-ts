type GreetProps = {
  name?: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greet
// if isnt default needs to import with {} and exact name