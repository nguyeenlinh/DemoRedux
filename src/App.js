import logo from './logo.svg';
import './App.css';
import { useDispatch , useSelector} from 'react-redux';
import { addToDo } from './action';
import { useState } from 'react';


function App() {
  const [content, setContent] = useState();
  const dispatch = useDispatch();
  const list = useSelector((state) => state)
  console.log(list);

  const handleClick = () => {
    dispatch(
      addToDo(content)
    )
  }

  return (
    <div className="App">
      <input 
        onChange={(e) => {
          // console.log(e.target.value);
         setContent( e.target.value);
        }} 
      />
      <button
        onClick={handleClick}
      >add</button>

      {
        list != [] &&
        <ul>
          {list.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      }
    </div>
  );
}

export default App;
