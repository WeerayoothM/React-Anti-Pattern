import React from "react";
import "./styles.css";
// import Demo from "./IndexAsKey";
// import Demo from "./NestedInternalState";
// import Demo from "./NoCleanup";
// import Demo from "./Mutation";
// import Demo from "./FunctionUpdater";
import Demo from "./CreationInsideComponent";

export default function App() {
  return (
    <div className="App">
      <h1>React Anti-Pattern</h1>
      <h2>and how to fix them</h2>
      <Demo />
    </div>
  );
}
