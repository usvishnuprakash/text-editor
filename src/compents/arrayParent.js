import { Arraychild } from "./arrayChild";

export function ArrayParent(props) {
  console.log({ props });
  return <Arraychild>{props.personDetailes}</Arraychild>;
}
