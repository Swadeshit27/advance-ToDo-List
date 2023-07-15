import React, { useEffect, useState } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList";
import { MdAddCircle } from "react-icons/md"
import { message } from "antd"

const getItes = () => {
  const items = localStorage.getItem('Items');
  if (items) return JSON.parse(items);
  return [];
}

const App = () => {
  const [InputItems, setInputItems] = useState("");
  const [list, setlist] = useState(getItes());
  const [toggle, settoggle] = useState(false);
  const [editeId, setEditeId] = useState()

  const addItem = () => {
    if (!InputItems) message.warning("Please write any note");
    else if (InputItems && toggle) {
      setlist(list.map((val) => {
        if (val.id === editeId) {
          return { id: editeId, name: InputItems };
        }
        return val;
      }))
      setInputItems("");
      settoggle(false)
      message.success("list update successfully");
    }
    else {
      let data = { id: new Date().getTime().toString(), name: InputItems }
      setlist((olditem) => [...olditem, data]);
      setInputItems("");
      message.success("Items added succesfully");
    }
  }
  const editeList = (id) => {
    const edite = list.find(val => val.id === id);
    setEditeId(id);
    settoggle(true);
    setInputItems(edite.name);
  }
  const deleteList = (id) => {
    setlist((olditem) => olditem.filter((ele) => ele.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(list));
  }, [list])
  return (
    <>
        <div className="card">
          <h1>ToDo List</h1>
          <div className="inpurSec">
            <input type="text" onChange={e => setInputItems(e.target.value)} value={InputItems} placeholder="Add an item" />
            <MdAddCircle onClick={addItem} size={40} className="addbtn" />
          </div>
          <ol className="listItems">
            {list.map((val) => {
              const { name, id } = val;
              return <ToDoList ondelete={deleteList} onedite={editeList} data={name} key={id} id={id} />
            })}
          </ol>
            <div className="btn" onClick={() => setlist([])}>clear all</div>
        </div>
    </>
  );
};

export default App;
