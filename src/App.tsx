import {useState, useEffect} from 'react';
import AddUsers from './components/AddUsers';
import ListaConvocados from './components/ListaConvocados';

export interface IState {
  users:{
    name: string,
    age: number,
    url: string,
    note?:string
  }[]
}


function App() {

  const[users,setUsers]=useState<IState["users"]>(
  ()=>{
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : []
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])


  return (
    <div className="App">
      <h1 className="text-center font-medium text-3xl">Lista de convocados</h1>
      <ListaConvocados users={users} setUsers={setUsers}/>
      <AddUsers users={users} setUsers={setUsers}/>
    </div>
  );
}

export default App;
