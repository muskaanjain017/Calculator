import React,{useState} from 'react';
import './App.css';

function App() {
  const[result,setResult] = useState("");

  const handleClick =(e) =>{
    setResult(result.concat(e.target.name));
  }
  const calculate = () =>{
    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error");
    }
    
  }

  document.onkeydown = k =>{
    if(k.key==='Backspace') {
      setResult(result.slice(0,result.length-1))
    }
  }

  return (
    <>
      <div className="Calculator">
          <form>
            <input type="text" placeholder='0' value={result}/>
          </form>
          <div className="gridContainer">
            <button onClick={handleClick} name="7">7</button>
            <button onClick={handleClick} name="8">8</button>
            <button onClick={handleClick} name="9">9</button>
            <button onClick={handleClick} name="/">&divide;</button>
            <button onClick={handleClick} name="4">4</button>
            <button onClick={handleClick} name="5">5</button>
            <button onClick={handleClick} name="6">6</button>
            <button onClick={handleClick} name="*">&times;</button>
            <button onClick={handleClick} name="1">1</button>
            <button onClick={handleClick} name="2">2</button>
            <button onClick={handleClick} name="3">3</button>
            <button onClick={handleClick} name="-">&ndash;</button>
            <button onClick={handleClick} name="0">0</button>
            <button onClick={handleClick} name=".">.</button>
            <button onClick={handleClick} name="+">+</button>
            <button onClick={calculate} id="equals" name="=">=</button>
          </div>
      </div>
    </>
  );
}

export default App;
