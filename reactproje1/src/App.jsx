import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [textChange, setTextChange] = useState("");

  const largeDataFunc = useMemo(() => {
    [... new Array(10000000)].forEach((e) => { }); // generate a huge
    return count * 3;
  }, [])

  return (

    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        Artır
      </button>
      {largeDataFunc}
      <input
        type="text"
        value={textChange}
        onChange={(event) => setTextChange(event.target.value)}
      />
    </>
  )
}

export default App
