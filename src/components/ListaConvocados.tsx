import { FC } from 'react'
import { IState as Props } from "../App";

interface IProps {
    users: Props["users"];
    setUsers: React.Dispatch<React.SetStateAction<Props["users"]>>;
}

const ListaConvocados:FC<IProps> = ({users, setUsers}) => {

    const deleteHandler = (e: any) =>{
        setUsers(users.filter(user=>{
            return user.name!==e.target.dataset.id;
        }))
    }

    return (
        <div className="m-20 grid gap-3 grid-cols-3">
            {users.map(user=>{
                return <div >
                    <li className="flex justify-content items-center flex-col list-none">
                        <h3 className="text-center">{user.name}</h3>
                        <img className="items-center object-cover w-16 h-16" src={user.url} alt="img" />
                        <h3>{user.note}</h3>
                        <button data-id={user.name} onClick={deleteHandler} className="font-medium">Delete</button>
                    </li>
                </div>
            })}
        </div>
    )
}

export default ListaConvocados;