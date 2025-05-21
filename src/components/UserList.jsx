function UserList({userList,deleteUser,editUserHandlerr,editIndex,data,handleChange,hobbies,setHobbies,saveEdit,cancelEdit
}) {
  return (
    <div>
        <h1>User List</h1>
      <table style={{ border: "2px solid black", width: "100%", marginBlock: "100px" }}>
        <thead>
          <tr>
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
          {userList.map((user, index) => (
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
                              setHobbies([...hobbies, hobby]);
                            } else {
                              setHobbies(hobbies.filter((h) => h !== hobby));
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
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => editUserHandlerr(index)}>Edit</button>
                    <button onClick={() => deleteUser(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
