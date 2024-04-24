import React, { useRef } from "react";

function App() {
  // const text = window.document.getElementById('text');
  // console.log("Text:", text)

  // const textRef = useRef();
  // console.log("textRef", textRef.current)

  // const countRef = useRef(0);
  // const counterfunc = () => {
  //   countRef.current++;
  //   console.log(countRef.current);

  // }
  const inputRef = useRef();

  const focusFunc = () => {
    inputRef.current.focus();
  }
  console.log(inputRef.current);

  return (
    // <button onClick={counterfunc}>
    //   click me!
    // </button>
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focusFunc}>focus!!</button>

    </>
  )
}

export default App
