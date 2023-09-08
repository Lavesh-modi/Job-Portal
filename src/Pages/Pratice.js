import React from 'react'
import { useState } from 'react'

export default function Pratice() {

//  const  [firstName, setFirstName] = useState("")
//  const  [lastName,setLastName] = useState("")
  

//  function ChangeHandler (event){
//     const data = event.target.value
//     setFirstName(data);
//     // console.log(data)
//   }

//   function LastchangeHandler(event){
//    const  lname = event.target.value
//    setLastName(lname);
//     // console.log(lname)
//   }
//   console.log(firstName)
//   console.log(lastName)


const [FormsData,setFormsData] = useState(
  {firstname: "",lastname :"",comments:"",checkbox:true,update:""
})

function ChangeHandler (event){
  setFormsData(prevFormData=>{
    return{
        ...prevFormData,
       [ event.target.name] : event.target.value
    }

  })
  // console.log(FormsData)
 
  
}

function submithandler(event){
  event.preventDefault();
  console.log("ginally called the onsubmit handler")
  console.log(FormsData)
}
  return (
    <div>
    <form onSubmit={submithandler}>
      <input

       type='text'
       placeholder='firstname'
       onChange={ChangeHandler}
       name = "firstname"
       value={FormsData.firstname}
      
      
      
      
      ></input>


<input
       type='text'
       placeholder='lastname '
       onChange={ChangeHandler}
       name="lastname"
       value={FormsData.lastname}
      
      
      
      
      ></input>
      <br></br>
      <textarea
     placeholder='comment'
     onChange={ChangeHandler}
     name = "comments"
     value={FormsData.comments}

      />
      <br></br>
      <input
        type='checkbox'
        onChange={ChangeHandler}
        name ="checkbox"
        id='isVisible'
        checked= {FormsData.checkbox}
      />
      <label htmlFor='isVisible'>i am visible </label>
      <br></br>
      <input
        type='radio'
        onChange={ChangeHandler}
        name="update"
        id='online-mode'

        value={FormsData.update}
      />
      <label htmlFor="online-mode">online mode on </label>
      <br></br>


      <button>SUBMIT</button>
      </form>

      
    </div>
  )
}
