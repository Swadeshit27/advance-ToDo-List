import React from "react";

const ToDoList=(props)=>{
   
    return(
        <>
            <li><div className="delete"><button onClick={()=>{
                props.ondelete(props.id)
            }}>✖️</button> </div>{props.text}</li>
        </>
    )
}
export default ToDoList