import { useRef } from "react";
import AnotherInput from "./AnotherInput";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <AnotherInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
