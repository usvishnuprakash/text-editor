import react from "react";

export default function () {
  return (
    <div>
      <Hello num="10" />
      <Hello2 />
    </div>
  );
}

export const Hello = (props) => {
  return (
    <>
      {console.log(props)}
      <p>{props.Name}</p>
    </>
  );
};

export const Hello2 = () => {
  return <h1>Inside Hello 2</h1>;
};
