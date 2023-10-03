import { Route, Routes } from 'react-router-dom'
import { Home, UpdateUser } from '../pages'

export const AppRouter = () => {

    return(
        <Routes>
            <Route path="/*" element={<Home/>} />
            <Route path="/update" element={<UpdateUser/>}/>
        </Routes>
    )

}
