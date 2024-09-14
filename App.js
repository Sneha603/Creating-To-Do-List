
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";


function App() {
  
    const [items, setItems]= useState(JSON.parse
        (localStorage.getItem("todo_list"))
        );

    const [newItem, setNewItem] = useState('')
    const [search,setNewSearch] = useState('')

    const addItem = (item) => {
        const id = items.length ? items[items.length -1].id 
        +1 : 1;
        const addNewItem = { id, checked: false, item}
        const ListItems = [...items, addNewItem]
        setItems(ListItems)
        localStorage.setItem("todo_list",JSON.stringify
        (ListItems))
    }

    
    const handleCheck =(id) =>{
        const ListItems = items.map((item) =>
         item.id===id? {...item, checked: !item.checked} :item)
        setItems(ListItems)
        localStorage.setItem("todo_list",JSON.stringify
        (ListItems))

    }
  
   const handledelete =(id) =>{
    const ListItems = items.filter((item) =>
    item.id !==id)
    setItems(ListItems)
    localStorage.setItem("todo_list",JSON.stringify
    (ListItems))
}
const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
}
return (
    <div className="App">
      <Header title = "TO DO LIST"/> 
      <AddItem
          newItem ={newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}
      />
      <SearchItem
         search ={search} 
         setNewSearch ={setNewSearch}
      />
      <Content 
        items ={items.filter(item => ((item.item).
        toLowerCase()).includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handledelete= {handledelete}
        />
      <Footer
      length ={items.length} 
      />
    </div>
  );
}
export default App;
