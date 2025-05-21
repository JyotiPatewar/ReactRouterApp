import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function UserTable() {
   const navigate = useNavigate();
   const location = useLocation();
   console.log(location)
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

   const deleteUser = (index) => {
      if (window.confirm("Do You Want To Delete It? Sure")) {
         userList.splice(index, 1);
         setUserList([...userList])
         localStorage.setItem("data", JSON.stringify([...userList]));
      }
   }

   const editUserHandler = (index) => {
      console.log(index)
      const selectedUser = userList[index];
      console.log(selectedUser)
      navigate('/Form', {
         state: {
            userData: selectedUser,
            index,
            isEdit: true,
         }
      });
   };


   return (
      <>
         <div>
            <h1>User Table</h1>
            <div>
               <table style={{ border: "2px solid black", width: "100%", marginBlock: "10px" }}  >
                  <thead >
                     <tr style={{ border: "2px solid black" }}>
                        <th>No.</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Status</th>
                        <th style={{ width: "20%" }}>Description</th>
                        <th>Action</th>
                     </tr>
                  </thead>

                  <tbody>
                     {userList.length === 0 ? (
                        <tr>
                           <td colSpan="9" style={{ textAlign: "center" }}>No Record Found</td>
                        </tr>
                     ) : (
                        userList.map((user, index) => (
                           <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.email}</td>
                              <td>{user.gender}</td>
                              <td>
                                 <ul>
                                    {user.hobbies.map((hobby, i) => (
                                       <li key={i}>{hobby}</li>
                                    ))}
                                 </ul>
                              </td>
                              <td>{user.status}</td>
                              <td>{user.description}</td>
                              <td>
                                 <button onClick={() => editUserHandler(index)} style={{margin:"10px"}}>Edit</button>
                                 <button onClick={() => deleteUser(index)}>Delete</button>
                              </td>
                           </tr>
                        ))
                     )}
                  </tbody>

               </table>
            </div>
         </div>
      </>
   )
}
export default UserTable;