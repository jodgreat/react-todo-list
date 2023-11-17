import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
    const [content, setContent] = useState({title:"" ,content:""});
  

    function handleOnChange(event){
        const { name, value } = event.target;
        setContent((prevItem)=>{
            return{
                ...prevItem,
                [name]:value
            }
        });
        
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        props.onAdd(content);
        setContent({title:"" , content:""});
      }
      function expand() {
        setExpanded(true);
      }
  return (
    <div>
      <form className="create-note">
       {isExpanded &&  <input onChange={handleOnChange} name="title" placeholder="Title" value={content.title}/>}
        <textarea onClick={expand} onChange={handleOnChange}  name="content" placeholder="Take a note..." rows={isExpanded ? 3:1} value={content.content} />
      
        <Zoom in={isExpanded}>
        <Fab onClick={handleSubmit}><AddIcon/></Fab>
        </Zoom>
      
      </form>
      
    </div>
  );
}

export default CreateArea;
