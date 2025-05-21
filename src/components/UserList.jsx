import { useEffect, useState } from "react";
function UserList() {

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
  const [editIndex, setEditIndex] = useState(null)
  const [edituser, setEditUser] = useState(false)
  const [toogle, setToogle] = useState(true)


  const deleteUser = (index) => {
    if (window.confirm("Do You Want To Delete It? Sure")) {
      userList.splice(index, 1);
      setUserList([...userList])
      localStorage.setItem("data", JSON.stringify([...userList]));
    }
  }

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("data"));
    if (savedUsers) {
      setUserList(savedUsers);
    }
  }, []);

  const editUserHandlerr = (index) => {
    const selectedUser = userList[index];
    console.log(selectedUser)
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


  const handleChange = (e) => {
    let val = e.target.value.trim();
    setData({ ...data, [e.target.name]: val })
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
  };


  const cancelEdit = () => {
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
  }




  return (
    <div>
      <h1>User List</h1>
      <table style={{ border: "2px solid black", width: "100%", marginBlock: "10px" }}>
        <thead>
          <tr style={{ border: "2px solid black" }}>
            <th>No.</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Status</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ textAlign: "center" }}>No Record Found</td>
            </tr>
          ) : (userList.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editIndex === index ? (
                  <input name="firstName" value={data.firstName} onChange={handleChange} />
                ) : (
                  user.firstName
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input name="lastName" value={data.lastName} onChange={handleChange} />
                ) : (
                  user.lastName
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input name="email" value={data.email} onChange={handleChange} />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={data.gender === "male"}
                      onChange={handleChange}
                    />{" "}
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={data.gender === "female"}
                      onChange={handleChange}
                    />{" "}
                    Female
                  </>
                ) : (
                  user.gender
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    {["drawing", "dancing", "playing", "writting", "reading"].map((hobby) => (
                      <label key={hobby}>
                        <input
                          type="checkbox"
                          name="hobbies"
                          value={hobby}
                          checked={hobbies.includes(hobby)}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            if (checked) {
                              sethobbies([...hobbies, hobby]);
                            } else {
                              sethobbies(hobbies.filter((h) => h !== hobby));
                            }
                          }}
                        />
                        {hobby}
                      </label>
                    ))}
                  </>
                ) : (
                  <ul>{user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}</ul>
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      checked={data.status === "active"}
                      onChange={handleChange}
                    />{" "}
                    Active
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      checked={data.status === "inactive"}
                      onChange={handleChange}
                    />{" "}
                    Inactive
                  </>
                ) : (
                  user.status
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <textarea
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                  />
                ) : (
                  user.description
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button onClick={handleSubmit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => editUserHandlerr(index)} style={{ margin: "10px" }}>Edit</button>
                    <button onClick={() => deleteUser(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}


export default UserList;
