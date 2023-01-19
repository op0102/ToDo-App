import React, { useState } from "react";

const Random = () => {
  const [name,setName] = useState();
  const [gname,setGname] = useState();
  let ll="";

  const Generate = () => {
  let char="eqwyutuityiouop213321549870*%RQWEUIIUO0123654789PFAGBXNZVXVMNBNGHQWERTYUIOPASDFGHJKLZXCVBNM@#$$%^&*";
  
  const passward_length=25;
  let passward ="";
  while (passward.length<passward_length){
    var random_number = Math.floor(Math.random()*char.length);
    passward += char[random_number];
  }
  console.log(passward.length,passward);
  setName(passward)
  setGname(passward)
  ll = gname;

}
const Copy =() => {
  var copyText = document.getElementById("pass");
  copyText.select();
  copyText.setSelectionRange(0,9999);
  navigator.clipboard.writeText(copyText.value);
}

return (
  <>
<div className="main">
  <input id="pass"  type="text" value={name} placeholder="Random passward" readOnly></input>
  <div className="gen">
  <button onClick={Generate}> Generate </button>
  <button onClick={Copy}> Copy </button>
  </div>
</div>

<h1>Passward Generator : {gname}</h1>

  
</>
);
}
export default Random;
// .main {
//     display: flex;
//     justify-content: center;
//     margin-top: 10vh;
//     margin-right: 40vw;
//     margin-left: 25vw;
//     flex-direction: column;
//     border: 2px solid black;
//     width: 30vw;
//     height: 50vh;
//     overflow: auto;
//     border-radius: 15px;
//     background-color: aliceblue;
// }
// .main:hover{
//     background-color: pink;
// }
    

// .gen {
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     margin-top: 10vh;
//     justify-content: space-around;
    
// }
// button {
//     font-size: large;
//     text-align: center;
//     width: auto;
//     height: 6vh;
//     display: flex;
//     flex-direction: row;
//     border: 2px solid blue;
//     border-radius: 5px;
//     background-color:cornsilk;
//     flex-wrap: wrap;
//     padding: auto;
//     justify-content: center;
    
    
// }
// button:hover{
//     background-color: aquamarine;
// }
// input {
//     font-size: large;
//     width: auto;
//     height: 7vh;
 
//     text-align: center;
//     border-radius: 10px;
//     font-size: 1.3em;
    
// }