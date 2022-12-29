import React,{useState} from "react";

function App(){
const[firstName,setFirstName]=useState("")
const[lastName,setLastName]=useState("")
  function changeHandler(e){
    setFirstName(e.target.value)
  
  }
  function changeHandler1(e){
    setLastName(e.target.value)
   
  }
  function HandleSubmit(e){
    e.preventDefault()
    console.log("printing")
   console.log(firstName)
   console.log(lastName)
   setFirstName("")
   setLastName("")
  }
  return(
    <div>
      <h1>user details</h1>
      <form onSubmit={HandleSubmit}>
        <div>
        <label>User First Name</label>
        <input type="text" placeholder="enter" onChange={changeHandler} value={firstName}></input>
        </div>
        <br></br>
          <div>
        <label>User Last Name</label>
        <input type="text" placeholder="enter" onChange={changeHandler1} value={lastName}></input>
        <div>
          <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default App
