import React, { FC,useState } from 'react'
import { IState as Props } from "../App";

interface IProps{
    users: Props["users"];
    setUsers: React.Dispatch<React.SetStateAction<Props["users"]>>;
}


const AddUsers:FC<IProps> = ({users, setUsers}) =>  {

    const[input,setInput]=useState({
        name: "",
        age: "",
        url: "",
        note: ""
    });

    const changeHandler=(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
        setInput({...input, [e.target.name]: e.target.value})
    }

    const submitHandler = () => {
        setUsers([
            ...users,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ]);
        localStorage.setItem("users", JSON.stringify(users));
        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        });
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <input className="text-center border-2 outline-none" required onChange={changeHandler} type="text" name="name" value={input.name} placeholder="Name..."/>
            <input className="text-center border-2 outline-none" required onChange={changeHandler} type="number" name="age" value={input.age} placeholder="Age..."/>
            <input className="text-center border-2 outline-none"  required onChange={changeHandler} type="text" name="url" value={input.url} placeholder="Url..."/>
            <textarea className="border-2 outline-none" onChange={changeHandler} name="note" value={input.note} placeholder="Note..."></textarea>
            <button onClick={submitHandler} >Add</button>
        </div>
    )
}

export default AddUsers;