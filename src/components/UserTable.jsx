function UserTable({ userList, deleteUser, editUserHandler }) {
   return (
      <>
         <div>
              <h1>User Table</h1>
            <div>
               <table style={{ border: "2px solid black", width: "100%", marginBlock: "100px" }}  >
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
                     {userList.map((user, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.hobbies.map((hobby, index) => <ul key={index}><li>{hobby}</li></ul>)}</td>
                        <td>{user.status}</td>
                        <td>{user.description}</td>
                        <td>
                           <button onClick={() => editUserHandler(index)}>Edit</button>
                           <button onClick={() => deleteUser(index)}>Delete</button>

                        </td>
                     </tr>)}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   )
}
export default UserTable;