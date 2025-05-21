// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import UserTable from "./components/UserTable"

// function App() {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     gender: "",
//     status: "",
//     description: ""
//   });
//   const [hobbies, sethobbies] = useState([]);
//   const [userList, setUserList] = useState([]);

//   const handleChange = (e) => {
//     let val = e.target.value.trim();
//     setData({ ...data, [e.target.name]: val })
//   }

//   const handleChangeCheck = (e) => {
//     const checked = e.target.checked;
//     const value = e.target.value;
//     console.log(checked, value)
//     if (checked)
//       sethobbies([...hobbies, value]);
//     else
//       sethobbies(hobbies.filter((hobby) => {
//         console.log("hobby  : ", hobby)
//         return hobby !== value
//       }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const finalData = {
//       ...data,
//       hobbies: hobbies,
//     };
//     setUserList([...userList, finalData])

//     // localStorage.setItem("data", JSON.stringify(finalData));                    //this will store latest data
//     localStorage.setItem("data", JSON.stringify([...userList, finalData]));        //this will store latest and old data as an array
//     alert("Data Saved")

//     setData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       gender: "",
//       status: "",
//       description: "",
//     });
//     sethobbies([]);

//     console.log(hobbies)
//     console.log("finalData :  ", finalData)
//     console.log("userList: ", [...userList, finalData]);
//   }


//   const deleteUser = (index) =>{
//     if(window.confirm("Do You Want To Delete It? Sure")){
//         userList.splice(index,1);
//         setUserList([...userList])
//          localStorage.setItem("data", JSON.stringify([...userList]));  
//     }
//   }

// useEffect(() => {
//   const isEditing = localStorage.getItem("isEditing");
//   if (isEditing === "true") {
//     const editUser = JSON.parse(localStorage.getItem("editUser"));
//     console.log("editUser :", editUser);
//     if (editUser) {
//       setData({
//         firstName: editUser.firstName,
//         lastName: editUser.lastName,
//         email: editUser.email,
//         gender: editUser.gender,
//         status: editUser.status,
//         description: editUser.description,
//       });
//       sethobbies(editUser.hobbies || []);
//     }
//     localStorage.removeItem("isEditing");
//     localStorage.removeItem("editUser");
//   }
// }, []);




//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <fieldset style={{ width: "1200px", height: "600px", backgroundColor: "white", color: "black", border: "2px solid blue" }}>
//             <legend style={{ color: "blue" }}>Personalia:</legend>
//             <label >First Name :</label>
//             <input className="input-field" type="text" pattern="^[A-Za-z]+$" placeholder="Enter Name" value={data.firstName} name="firstName" onChange={handleChange} required></input><br></br>
//             <label >Last Name : </label>
//             <input className="input-field" type="text" pattern="^[A-Za-z]+$"  placeholder="Enter Last Name" value={data.lastName} name="lastName" onChange={handleChange} required></input><br></br>
//             <label >Email :</label>
//             <input className="input-field" type="email" placeholder="Enter Email" value={data.email} name="email" onChange={handleChange} required></input><br></br>
//             <label >Gender :</label>
//             <input className="input-field" type='radio' name="gender" value="female" onChange={handleChange} checked={data.gender === "female"} ></input><label>&nbsp;Female &nbsp;&nbsp;&nbsp;</label>
//             <input className="input-field" type='radio' name="gender" value="male" onChange={handleChange} checked={data.gender === "male"}></input> <label>Male</label><br></br>
//             <label>Hobbies :</label>
//             <div className="hobbies-group">
//               <input type="checkbox" name='hobbies' value="drawing" onChange={handleChangeCheck} checked={hobbies.includes("drawing")} ></input><label>&nbsp;Drawing &nbsp;&nbsp;&nbsp;</label><br></br>
//               <input type="checkbox" name='hobbies' value="dancing" onChange={handleChangeCheck} checked={hobbies.includes("dancing")}></input><label>&nbsp;Dancing &nbsp;&nbsp;&nbsp;</label><br></br>
//               <input type="checkbox" name='hobbies' value="playing" onChange={handleChangeCheck} checked={hobbies.includes("playing")}></input><label>&nbsp;Playing &nbsp;&nbsp;&nbsp;</label><br></br>
//               <input type="checkbox" name='hobbies' value="writting" onChange={handleChangeCheck} checked={hobbies.includes("writting")}></input><label>&nbsp;Writting &nbsp;&nbsp;&nbsp;</label><br></br>
//               <input type="checkbox" name='hobbies' value="reading" onChange={handleChangeCheck} checked={hobbies.includes("reading")}></input><label>&nbsp;Reading &nbsp;&nbsp;&nbsp;</label><br></br>
//             </div><br />
//             <label >Status :</label>
//             <input type='radio' name="status" value="active" onChange={handleChange} checked={data.status === "active"}></input><label>&nbsp;Active &nbsp;&nbsp;&nbsp;</label>
//             <input type='radio' name="status" value="inactive" onChange={handleChange} checked={data.status === "inactive"}></input><label>&nbsp;Inactive &nbsp;&nbsp;&nbsp;</label> <br></br>
//             <label>Description :</label>
//             <textarea className="input-field" name="description" value={data.description} rows="5" cols="20" onChange={handleChange} placeholder="Add Opinion Here!"></textarea><br />

//             <div>
//               <button className="submit-button" type="submit" >Save</button>
//             </div>
//           </fieldset>
//         </form>
//       </div>

//       <div>
//         <UserTable userList={userList} deleteUser={deleteUser} />
//       </div>

//     </>
//   )
// }

// export default App

























































import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserTable from "./components/UserTable"

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    status: "",
    description: ""
  });
  const [hobbies, sethobbies] = useState([]);
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    let val = e.target.value.trim();
    setData({ ...data, [e.target.name]: val })
  }

  const handleChangeCheck = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    console.log(checked, value)
    if (checked)
      sethobbies([...hobbies, value]);
    else
      sethobbies(hobbies.filter((hobby) => {
        console.log("hobby  : ", hobby)
        return hobby !== value
      }))
  }

const handleSubmit = (e) => {
  e.preventDefault();

  const finalData = {
    ...data,
    hobbies: hobbies,
  };

  let updatedList = [...userList];

  if (isEditing && editIndex !== null) {
    // Edit mode: replace the existing item
    updatedList[editIndex] = finalData;
    setIsEditing(false);
    setEditIndex(null);
  } else {
    // Add mode: append new data
    updatedList.push(finalData);
  }

  // Update state and localStorage
  setUserList(updatedList);
  localStorage.setItem("data", JSON.stringify(updatedList));

  alert("Data Saved");

  // Reset the form
  setData({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    status: "",
    description: "",
  });
  sethobbies([]);

  console.log("hobbies:", hobbies);
  console.log("finalData:", finalData);
  console.log("userList:", updatedList);
};



  const deleteUser = (index) =>{
    if(window.confirm("Do You Want To Delete It? Sure")){
        userList.splice(index,1);
        setUserList([...userList])
         localStorage.setItem("data", JSON.stringify([...userList]));  
    }
  }

useEffect(() => {
  const isEditing = localStorage.getItem("isEditing");
  if (isEditing === "true") {
    const editUser = JSON.parse(localStorage.getItem("editUser"));
    console.log("editUser :", editUser);
    if (editUser) {
      setData({
        firstName: editUser.firstName,
        lastName: editUser.lastName,
        email: editUser.email,
        gender: editUser.gender,
        status: editUser.status,
        description: editUser.description,
      });
      sethobbies(editUser.hobbies || []);
    }
    localStorage.removeItem("isEditing");
    localStorage.removeItem("editUser");
  }
}, []);




  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset style={{ width: "1200px", height: "600px", backgroundColor: "white", color: "black", border: "2px solid blue" }}>
            <legend style={{ color: "blue" }}>Personalia:</legend>
            <label >First Name :</label>
            <input className="input-field" type="text" pattern="^[A-Za-z]+$" placeholder="Enter Name" value={data.firstName} name="firstName" onChange={handleChange} required></input><br></br>
            <label >Last Name : </label>
            <input className="input-field" type="text" pattern="^[A-Za-z]+$"  placeholder="Enter Last Name" value={data.lastName} name="lastName" onChange={handleChange} required></input><br></br>
            <label >Email :</label>
            <input className="input-field" type="email" placeholder="Enter Email" value={data.email} name="email" onChange={handleChange} required></input><br></br>
            <label >Gender :</label>
            <input className="input-field" type='radio' name="gender" value="female" onChange={handleChange} checked={data.gender === "female"} ></input><label>&nbsp;Female &nbsp;&nbsp;&nbsp;</label>
            <input className="input-field" type='radio' name="gender" value="male" onChange={handleChange} checked={data.gender === "male"}></input> <label>Male</label><br></br>
            <label>Hobbies :</label>
            <div className="hobbies-group">
              <input type="checkbox" name='hobbies' value="drawing" onChange={handleChangeCheck} checked={hobbies.includes("drawing")} ></input><label>&nbsp;Drawing &nbsp;&nbsp;&nbsp;</label><br></br>
              <input type="checkbox" name='hobbies' value="dancing" onChange={handleChangeCheck} checked={hobbies.includes("dancing")}></input><label>&nbsp;Dancing &nbsp;&nbsp;&nbsp;</label><br></br>
              <input type="checkbox" name='hobbies' value="playing" onChange={handleChangeCheck} checked={hobbies.includes("playing")}></input><label>&nbsp;Playing &nbsp;&nbsp;&nbsp;</label><br></br>
              <input type="checkbox" name='hobbies' value="writting" onChange={handleChangeCheck} checked={hobbies.includes("writting")}></input><label>&nbsp;Writting &nbsp;&nbsp;&nbsp;</label><br></br>
              <input type="checkbox" name='hobbies' value="reading" onChange={handleChangeCheck} checked={hobbies.includes("reading")}></input><label>&nbsp;Reading &nbsp;&nbsp;&nbsp;</label><br></br>
            </div><br />
            <label >Status :</label>
            <input type='radio' name="status" value="active" onChange={handleChange} checked={data.status === "active"}></input><label>&nbsp;Active &nbsp;&nbsp;&nbsp;</label>
            <input type='radio' name="status" value="inactive" onChange={handleChange} checked={data.status === "inactive"}></input><label>&nbsp;Inactive &nbsp;&nbsp;&nbsp;</label> <br></br>
            <label>Description :</label>
            <textarea className="input-field" name="description" value={data.description} rows="5" cols="20" onChange={handleChange} placeholder="Add Opinion Here!"></textarea><br />

            <div>
              <button className="submit-button" type="submit" >Save</button>
            </div>
          </fieldset>
        </form>
      </div>

      <div>
        <UserTable userList={userList} deleteUser={deleteUser} />
      </div>

    </>
  )
}

export default App