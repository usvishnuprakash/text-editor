import { ChildComponent } from "./childComponent";
export function ParentComponent(props) {
  console.log(props);
  function clickFunction(child) {
    alert("hai how are you" + child);
  }
  return (
    <div>
      {console.log(props)}
      <ChildComponent greetHandler={clickFunction} />
    </div>
  );
}
