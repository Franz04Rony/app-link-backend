import { useNavigate } from 'react-router-dom'
import Button from '../atomic/atoms/Button/Button'
import s from './styles/Register.module.css'

export const Register = () => {

    const navigate = useNavigate()

    const goWelcome = () => {
        navigate("/welcome")
    }

  return (
    <div>
        <div className={s.box}>
            <h1 className={s.header}>LinkApp Register 📝</h1>
            
            <div className={s.form}>
                <div>
                    <label htmlFor="nickname">NickName</label>
                    <input 
                        type="text" 
                        id="nickname"
                        name="nickName"
                        autoComplete="off" 
                        minLength="0" 
                        maxLength="1023" 
                        placeholder="MyCoolNickName" 
                        className={s.input}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password <p>(debe contener almenos 1 mayúscula, minúsculas y 1 número )</p></label>
                    <input 
                        type="password"
                        id="password"
                        autoComplete="off" 
                        minLength="0" 
                        maxLength="1023" 
                        placeholder="MyPassword123" 
                        className={s.input}
                    />
                </div>

                <label className={s.image}>
                    <p>Perfil Image (Upload your image -optional-)</p>
                    {/* <img src={data.image ? data.image : "https://th.bing.com/th/id/OIG.s9mB6..wYYm1x1cRK3wA?pid=ImgGn"} alt="nueva imagen" /> */}
                    <img src="https://th.bing.com/th/id/OIG.PqoI5UVOCAGSET4xwMgq?pid=ImgGn" alt="nueva imagen" />
                    <input 
                        type="file" 
                        name="upload-img" 
                        accept="image/*"
                        // onChange={ uploadImage }
                    />
                </label>

                <div className={s.buttonBox}>
                    <Button
                        label="Volver"
                        onClick={goWelcome}
                    />
                    <Button
                        label="Registrar"
                    />
                </div>
            </div>
        </div>

    </div>
  )
}
