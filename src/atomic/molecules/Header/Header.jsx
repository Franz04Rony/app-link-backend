import {Button} from '../../atoms/Button/Button'
import {PerfilPicture} from '../../atoms/PerfilPicture/PerfilPicture'
import s from './Header.module.css'

export const Header = ({
    profileName,
    src,
}) => {
  return (
    <div className={s.header}>
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
                label = 'seguir'
            />
        </div>
    </div>
  )
}

Header.defaultProps = {
    profileName: 'Senku Ishigami'
}
