import React from "react";
import { useState } from "react";
import './OM.css';

const Om = () => {
  const [item,setItem] = useState("");
  const [data,setData] = useState([]);

  const Added = () => {
    
    if (!item){
        alert("Plese fill the data")
    }
    else { 
        setData([...data,item])
        setItem("")
       }
    }
    const Delete = (id) => {
      const updateItem = data.filter((elem,ind)=>{
        return id !== ind;
      })
      setData(updateItem);
    }
    const Edit = (id) => {
      const EditItem = data.filter((elem,ind)=>{
        return id == ind
      } )
     setItem(EditItem)

     
   }
      
    return (
    <>
    <div>
        <label> Name : <input type="text" value={item} onChange={(e)=> setItem(e.target.value)}/> </label>
        <button onClick={Added}>Add</button>
        <br /><br />
        <div>
        <table>
            <thead>
                    <tr> 
                        <th>  Name  </th>
                        <th>  Action  </th>
                    </tr>
            </thead>
            <tbody>
             
              {data.map((elem,ind)=>{
                return (<><tr key={ind}>
                            <td>{elem}</td> 
                            <td><button onClick={()=> Edit(ind)}>Edit</button><button onClick={()=> Delete(ind)} >Delete</button></td> 
                        </tr></>
               )
                })}
                 </tbody>
        </table>
        </div>
    </div>
                      
              
                  

    

    


  
     
    
    </>
    )
    
}
                    
               
            
               
           
        
    
     
    

                    
              
                  
                          
             
                
        




export default Om;