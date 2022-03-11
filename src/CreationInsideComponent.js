import React, { useState, useEffect } from "react";

const api = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(Date.now()), 1000);
  });

export default function Demo({ components = [] }) {
  const [count, setCount] = useState(0);

  function Child({ onClick }) {
    useEffect(() => {
      (async () => {
        console.log(await api());
      })();
    }, []);
    return (
      <div>
        <button onClick={onClick}>Press me</button>
      </div>
    );
  }

  return (
    <div>
      <h3>current count is {count}</h3>
      <Child onClick={() => setCount(c => c + 1)} />
    </div>
  );
}

// function withHOC(Component) {
//   return props => {
//     useEffect(() => {
//       console.log('simulate DidMount!')
//     })
//     return <Component {...props} />
//   }
// }
