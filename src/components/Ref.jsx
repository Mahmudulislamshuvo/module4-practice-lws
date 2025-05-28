import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.scrollIntoView();
  }

  return (
    <>
      <div ref={inputRef} onClick={handleClick}>
        Hellow
      </div>
    </>
  );
}
