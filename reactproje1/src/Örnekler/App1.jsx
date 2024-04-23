
import { useState } from 'react';
import Text from './components/Text';
import Home from './pages/Home';
import Button from './components/Button';

function App() {
  // let name = "hatice";
  const [name, setName] = useState("react");
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(0);
  // const clickFunction = () => {
  //   // setName("reacttt")
  //   setCount(count + 1)
  // }
  // const clickFunction1 = () => {
  //   // setName("reacttt")
  //   if (count > 0)
  //     setCount(count - 1)
  // }

  // const [name, setName] = useState("React")
  // useEffect(() => {
  //   setTimeout(() => {
  //     setName("Yasin")
  //   }, 1000)
  // }, [name])

  return (
    <>
      {/* <button onClick={() => { setCount(count + 1) }}>Arttır</button > */}
      {/* <Button onClick={clickFunction} name={"Arttır"} />
      <div onClick={clickFunction}>{count}</div>
      <button onClick={clickFunction1}>Azalt</button> */}
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setData(prev => ([...prev, name]))}>Tıkla</button>
      <div>
        {data.map(
          (m, i) => (<div key={i}>{m}</div>))}
      </div>
    </>
  )
}

export default App