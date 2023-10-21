import { Route, Routes } from 'react-router-dom'
import { Home, UpdateUser, Register, Login } from '../pages'
import { Welcome } from '../pages/Welcome'

export const AppRouter = () => {

    return(
        <Routes>
            <Route path="/*" element={<Welcome/>} />
            <Route path="/welcome" element={<Welcome/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/update" element={<UpdateUser/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )

}
