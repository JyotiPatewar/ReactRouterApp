import './App.css'
import { Route, Routes } from "react-router-dom"
import UserTable from "./components/UserTable"
import UserList from "./components/UserList"
import UserForm from "./components/UserForm"
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Form" element={<UserForm />} />
        <Route path="/UserTable" element={<UserTable />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </>
  )
}

export default App;






