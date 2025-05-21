function UserForm({handleSubmit,data,handleChange,handleChangeCheck,hobbies}){
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <fieldset style={{ width: "1200px", height: "700", backgroundColor: "white", color: "black", border: "2px solid blue" }}>
            <legend style={{ color: "blue" }}>Personalia:</legend>
            <label >First Name :</label>
            <input className="input-field" type="text" pattern="^[A-Za-z]+$" placeholder="Enter Name" value={data.firstName} name="firstName" onChange={handleChange} required></input><br></br>
            <label >Last Name : </label>
            <input className="input-field" type="text" pattern="^[A-Za-z]+$" placeholder="Enter Last Name" value={data.lastName} name="lastName" onChange={handleChange} required></input><br></br>
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
    )
}
export default UserForm;