import React, { useState, useEffect } from "react";

const callApi = data => {};

export default function Demo() {
  const [state, setState] = useState({ name: "jun" });
  const [count, setCount] = useState(0);
  const notify = () => {
    console.log(state);
  };
  const saveData = (type, data) => {
    const result = { ...data };
    if (type === "A") {
      result.type = type;
    }
    if (type === "B") {
      result.shouldHaveB = true;
    }
    console.log("result", result);
    callApi(result);
    notify();
  };
  useEffect(() => {
    console.log("Hey, I rereder!");
  });
  return (
    <div>
      <h6>
        <button onClick={() => setCount(c => c + 1)}>rerender</button>
      </h6>
      <div>{JSON.stringify(state, null, 2)}</div>
      <br />
      <button onClick={() => saveData("A", state)}>Call A</button>
      <button onClick={() => saveData("B", state)}>Call B</button>
    </div>
  );
}
