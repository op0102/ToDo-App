import React from "react";

const ToDoList = (props) => {

    return (
        <><div className="ToDo"><li>
        <b className="del" onClick={()=>{props.onSelect(props.id)}}>+</b>
        {props.text}</li>
        </div>
        </>
    )

}

export default ToDoList ;

// import ToDoList from "./ToDoList";

// const App = () => {

//   const [item,setItem] =useState("");

//   const [items,setItems] =useState([]);

//   const Change = (e) => {
//     setItem(e.target.value)
//   }
//  const Add = () => {
//     if (item.length==0) {alert("Please Add any todo after that click add button")}
//     else { return (setItems((oldVal)=>{return [...oldVal, item]}),setItem(""));}}
       
//  const Reset = () => {setItems(item=[])}

//  const deleteItem = (id) => {  setItems((oldItems) => {return oldItems.filter((arrElem,index) => {return index !== id;})})};

// return (
//   <>
//   <div className="main">
//   <div>
//     <h1>To Do List</h1>
    
//     <input type="text" value={item} placeholder='Add a Items' onChange={Change} /><button id="addbutton" onClick={Add}>Add</button>
 
//       <ul>
//         {items.map((curElem, index) => {return (<ToDoList key={index} id={index} text={curElem} onSelect={deleteItem}/>)})}
//       </ul>
//     </div>
    
//   </div>
//   <button id="reset" onClick={Reset}>Reset</button>
//   </>);};

  
// .main {
//     width: auto;
//     height: auto;
//     display: flex;
    
//     border: 5px solid black;
//     margin-left: 30vw;
//     margin-right: 30vw;
//     margin-top: 15vh;
//     border-radius: 8px;
//     overflow: hidden;
//     box-shadow: 2px 2px 2px white, 2px 2px 2px whitesmoke, 2px 2px 2px white;
    
   
    
// }
// h1 {
//     text-align: center;
//     background-color: violet;
//     width: 100%;
//     margin-left: 1vw;
//     padding-left:1%;
// }
    
    

// b {
//     font-size: 1.2em;
//     background-color: green;
// }   
// input {
//     font-size: x-large;
//     margin-left: 1vw;
//     margin-right: 1vw;
//     background: transparent;
//     border-width: 2px;
//     border-top: 0;
//     border-left: 0;
//     border-right: 0;
//     background: transparent;
//     outline: 0;
//     height: 23px;
//     border-color: violet;
//     width: 220px;
    
// }
// ul {
//     list-style-type: none;
//    margin-left: -2vw;
//    font-size: large;
//    text-align: top;
    
//   }
// #addbutton {
//     background-color: violet;
//     font-size: x-large;
//     cursor: pointer;
// }
// li {
//     font-size: x-large;
// }
// #addbutton:hover{
//     background-color: green;
// }
// #reset {
//     width: auto;
//     height: auto;
//     margin-left: 63vw;
//     margin-right: 30vw;
//     margin-top: 1vh;
//     background-color: violet;
//     font-size: x-large;
   
// }
// #reset:hover{
//     background-color: green;
// }
// .ToDo {
//     display: flex;
//     flex-direction: row;
    
 
// }
// .del {
//     cursor: pointer;
//     margin-right: 0.5vw;
// }
// body {
//     background-color: aqua;
// }
  
