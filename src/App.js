import React, {useState} from 'react'

const App = () => {

    const [counter, setCounter] = useState(0)

    return ( 
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={(e)=>setCounter(counter+1)}>+</button>
        </div>
     );
}
 
export default App;