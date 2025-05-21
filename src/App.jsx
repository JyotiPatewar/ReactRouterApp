import { useEffect, useState } from 'react'
import './App.css'
import { Route,Routes } from "react-router-dom"
import UserTable from "./components/UserTable"
import UserList from "./components/UserList"
import UserForm from "./components/UserForm"
import Header from './components/Header'
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
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
  const [edituser, setEditUser] = useState(false)
    const [toogle, setToogle] = useState(true)
  const [editIndex, setEditIndex] = useState(null)


  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("data"));
    if (savedUsers) {
      setUserList(savedUsers);
    }
  }, []);


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
    const finalData = { ...data, hobbies };

    let updatedList = [...userList];

    if (edituser && editIndex !== null) {
      updatedList[editIndex] = finalData;
    } else {
      updatedList.push(finalData);
    }

    setUserList(updatedList);
    localStorage.setItem("data", JSON.stringify(updatedList));

    setData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      status: "",
      description: "",
    });
    sethobbies([]);
    setEditUser(false);
    setEditIndex(null);
    {toogle && navigate('/UserTable')};
  };

  const deleteUser = (index) => {
    if (window.confirm("Do You Want To Delete It? Sure")) {
      userList.splice(index, 1);
      setUserList([...userList])
      localStorage.setItem("data", JSON.stringify([...userList]));
    }
  }

  const editUserHandler = (index) => {
    const selectedUser = userList[index];
    setData({
      firstName: selectedUser.firstName,
      lastName: selectedUser.lastName,
      email: selectedUser.email,
      gender: selectedUser.gender,
      status: selectedUser.status,
      description: selectedUser.description,
    });
    sethobbies(selectedUser.hobbies || []);
    setEditUser(true);
    setEditIndex(index);
       navigate('/Form');
       setToogle(true)
  };


   const editUserHandlerr = (index) => {
    const selectedUser = userList[index];
    setData({
      firstName: selectedUser.firstName,
      lastName: selectedUser.lastName,
      email: selectedUser.email,
      gender: selectedUser.gender,
      status: selectedUser.status,
      description: selectedUser.description,
    });
    sethobbies(selectedUser.hobbies || []);
    setEditUser(true);
    setEditIndex(index);
    setToogle(false)
    };
  return (
    <>

<Header/>
<Routes>
  <Route path="/Form" element={<UserForm handleSubmit={handleSubmit}  data={data} handleChange={handleChange} handleChangeCheck={handleChangeCheck} hobbies={hobbies}/>}/>
  <Route path="/UserTable" element={<UserTable userList={userList} deleteUser={deleteUser} editUserHandler={editUserHandler}/>}/>
  <Route path="/UserList" element={<UserList userList={userList}
        deleteUser={deleteUser}
        editUserHandlerr={editUserHandlerr}
        editIndex={editIndex}
        data={data}
        handleChange={handleChange}
        hobbies={hobbies}
        setHobbies={sethobbies}
        setEditIndex={setEditIndex}
        setEditUser={setEditUser}
        setData={setData}
        saveEdit={handleSubmit}
        cancelEdit={() => {
          setEditIndex(null);
          setData({
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            status: "",
            description: "",
          });
          sethobbies([]);
        }}/>}/>
</Routes>
    {/* <div>
      <Header/>
    </div>
     */}
     {/* <div>
      <UserForm handleSubmit={handleSubmit}  data={data} handleChange={handleChange} handleChangeCheck={handleChangeCheck} hobbies={hobbies}/>
     </div>


      <div>
        <UserTable userList={userList} deleteUser={deleteUser} editUserHandler={editUserHandler} />
      </div> 

      <div>
      <UserList
        userList={userList}
        deleteUser={deleteUser}
        editUserHandler={editUserHandler}
        editIndex={editIndex}
        data={data}
        handleChange={handleChange}
        hobbies={hobbies}
        setHobbies={sethobbies}
        setEditIndex={setEditIndex}
        setEditUser={setEditUser}
        setData={setData}
        saveEdit={handleSubmit}
        cancelEdit={() => {
          setEditIndex(null);
          setData({
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            status: "",
            description: "",
          });
          sethobbies([]);
        }}
      />
      </div> */}

    </>
  )
}

export default App;
















// //For UserList
// import { useState, useEffect } from "react";
// import UserList from './components/UserList';

// function App() {
//   const [userList, setUserList] = useState([]);

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("data"));
//     if (storedUsers) {
//       setUserList(storedUsers);
//     }
//   }, []);

//   const deleteUser = (index) => {
//     if (window.confirm("Do You Want To Delete It? Sure")) {
//       const updatedList = [...userList];
//       updatedList.splice(index, 1);
//       setUserList(updatedList);
//       localStorage.setItem("data", JSON.stringify(updatedList));
//     }
//   };

//   const editUserInTable = (index, updatedData) => {
//     const updatedList = [...userList];
//     updatedList[index] = updatedData;
//     setUserList(updatedList);
//     localStorage.setItem("data", JSON.stringify(updatedList));
//   };

//   return (
//     <div>
//       <UserList
//         userList={userList}
//         deleteUser={deleteUser}
//         editUserInTable={editUserInTable}
//       />
//     </div>
//   );
// }

// export default App;
