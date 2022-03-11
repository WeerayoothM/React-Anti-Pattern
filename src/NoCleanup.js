import React, { useEffect, useState } from "react";

export default function Demo() {
  const [page, setPage] = useState(0);
  const [y, setY] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("page is", page);
      setY(`${window.scrollY} + ${page}`);
    });
  }, [page]);
  return (
    <div style={{ height: 1000 }}>
      <select value={page} onChange={e => setPage(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <h3>Y is {y}</h3>
    </div>
  );
}
