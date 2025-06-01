import { useState } from "react";
import { ChildComponent } from "./Child";

export default function Parent() {
  const [name, setName] = useState("Rahim");

  const changeName = () => {
    const names = ["Rahim", "Karim", "Jabbar"];
    var randomName = names[Math.floor(Math.random() * names.length)];
    setName(randomName);
  };

  return (
    <div>
      <button onClick={changeName}>Change Name</button>
      <ChildComponent key={name} name={name} />
    </div>
  );
}
