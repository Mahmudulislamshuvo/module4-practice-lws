import { useState } from "react";

export const ChildComponent = ({ name }) => {
  const [state, setState] = useState("");
  return (
    <div>
      <h1>Hello {name} </h1>
      <input value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
};
