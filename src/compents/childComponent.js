export function ChildComponent(props) {
  console.log(props)
  return (
    <div>
     <button onClick={()=>props.greetHandler("chils")}></button>
    </div>
  );
}
