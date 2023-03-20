import React,{useState} from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
    const [InputItems, setInputItems] = useState("");
    const [list, setlist] = useState([]);
    const inputItem=(e)=>{
        setInputItems(e.target.value);
    }
    const addItem=()=>{
        setlist((olditem)=>{
            return [...olditem,InputItems];
        });
        setInputItems("");
    }
    const deleteList=(id)=>{
        setlist((olditem)=>{
            return  olditem.filter((v,i)=>{
                return i!==id;
            })
        });
    }
  return (
    <>
      <div className="container">
        <div className="card">
          <h1>ToDo List</h1>
          <div className="inpurSec">
            <input type="text"  onChange={inputItem} value={InputItems} placeholder="Add an item"/> 
            <button onClick={addItem}>+</button>
          </div>
          <div className="listItems">
          <ol>
          {list.map((e,index)=>{
              return <ToDoList ondelete={deleteList} text={e} key={index} id={index} />
          })}
            
          </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
