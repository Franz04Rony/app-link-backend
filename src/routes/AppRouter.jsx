import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home, UpdateUser, Register, Login } from '../pages'
import { Welcome } from '../pages/Welcome'


export const AppRouter = () => {
    const navigate = useNavigate()

    const ProtectedRoute = (props) => {
        return (
        
        <>
        {  
            localStorage.getItem("jwt")
            ?
            props.children
            :
            <Welcome/>
        }
        </>
        )
    }

    return(
        <Routes>
            
            <Route path="/*" element={<ProtectedRoute> <Welcome/> </ProtectedRoute>} />
            <Route path="/welcome" element={<ProtectedRoute> <Welcome/> </ProtectedRoute>} />
            <Route path="/home" element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
            <Route path="/update" element={<ProtectedRoute> <UpdateUser/> </ProtectedRoute>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )

}
