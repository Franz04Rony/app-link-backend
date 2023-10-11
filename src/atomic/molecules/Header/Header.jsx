import {Button} from '../../atoms/Button/Button'
import {PerfilPicture} from '../../atoms/PerfilPicture/PerfilPicture'
import s from './Header.module.css'

import { useNavigate } from 'react-router-dom'

export const Header = ({
    profileName,
    src,
    links,
    userID
}) => {
    const navigate = useNavigate()

    const addNewLink = () => {
        navigate("/update", { state: {links, userID, profileName, src} })
    }
    const returnHome = () => {
        navigate("/")
    }

  return (
    <nav className={s.header}>
        <div className={s.perfil}>
            <PerfilPicture 
                src = {src}
            />
            <div>
                {profileName}
            </div>
        </div>

        <div className={s.buttonGroup}>
            <Button 
                label = 'Home'
                onClick = {returnHome}
            />

            <Button
                label = 'Add new link'
                onClick = {addNewLink}
            />
        </div>
    </nav>
  )
}

Header.defaultProps = {
    profileName: 'Senku Ishigami'
}
