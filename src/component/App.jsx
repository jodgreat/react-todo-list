import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea  from "./CreateArea";

function App(){
    
    const [newContent , setNewContent] = useState([]);

    function onAddItem(addItem){
        
        setNewContent((prevItem)=>{
            return[...prevItem,addItem]
        });
        
            
    }

    function itemDelete(id){
        setNewContent((prevItem)=>{
            return prevItem.filter((item,index)=>{
                return index !==id;
            })
        });
    }
    return (
        <div>
        <Header/>
        <CreateArea onAdd={onAddItem}/>
        {newContent.map((todoItem, index) => (
           <Note  id={index} key={index} title={todoItem.title} content={todoItem.content} delete={itemDelete}/>
          ))}
        
        <Footer/>
        </div>
    );
}
export default App;