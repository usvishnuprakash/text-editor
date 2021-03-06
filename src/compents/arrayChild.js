let persons = [
  {
    name: "vishnu",
    age: 20,
    place: "kulasekharam",
  },
  {
    name: "suman",
    age: "25",
    place: "thakalai",
  },
  {
    name: "tamil",
    age: "27",
    place: "coimbatore",
  },
];
export function Arraychild() {
  let personsDetailes= persons.map((persons) => <div> "i am" {persons.name} "my age is"{persons.age} "my palace is "{persons.place}</div>);
  console.log(personsDetailes)
  return(
      <div>{personsDetailes}</div>
  )
}
