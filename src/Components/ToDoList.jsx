import React from "react";
import { BiSolidEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

const ToDoList = ({ data, id, onedite, ondelete }) => {
    return (
        <>
            <li className="items"><p> {data}</p> <MdDelete size={25} onClick={() => ondelete(id)} style={{ cursor: "pointer", color: "#f00" }} /> <BiSolidEdit size={25} onClick={() => onedite(id)} style={{ cursor: "pointer", color:"#1bff57" }} /></li>
        </>
    )
}
export default ToDoList