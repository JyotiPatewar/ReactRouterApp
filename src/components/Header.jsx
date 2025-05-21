import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div style={{ backgroundColor: "#007bff", padding: "10px", display: "flex", gap: "20px" }}>
                <Link to="/Form" style={{ color: "white", textDecoration: "none" }}>Form</Link>
                <Link to="/UserTable" style={{ color: "white", textDecoration: "none" }}>User Table</Link>
                <Link to="/UserList" style={{ color: "white", textDecoration: "none" }}>User List</Link>
            </div>
        </>
    );
}

export default Header;
