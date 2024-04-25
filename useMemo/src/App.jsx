import { useState, useMemo } from 'react'

function App() {
  const [value, setValue] = useState(null)
  const [value2, setValue2] = useState(null)
  // const cacheValue = useMemo(() => { }, [])
  // useMemo(() => { }, []) --- useMemo(compute, dependencies) dependencies bağımlılığa bağlı olan değişken 

  const fact = useMemo(() => {
    return factFunct(value)
  }, [value2]);

  return (
    <div className='App'>
      <input type="number" onChange={e => setValue(e.target.value)} />
      {fact}
      <button onClick={() => setValue2(value2 + 1)}>Hesapla</button>
    </div>
  )
}

const factFunct = (n) => {
  console.log("fac function called")
  return n <= 1 ? 1 : n * factFunct(n - 1);

}

export default App
