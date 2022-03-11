import React, { useState, useEffect } from "react";

function Child({ text, setText }) {
  useEffect(() => {
    setText(text);
  }, []);
  return <div>{text}</div>;
}

export default function Demo() {
  const [list, setList] = useState([]);
  const setText = text => setList(latestList => [...latestList, text]);
  return (
    <div>
      <div>result : {list.join(", ")}</div>
      <Child text="item 1" setText={setText} />
      <Child text="World" setText={setText} />
      <Child text="Haha" setText={setText} />
    </div>
  );
}
