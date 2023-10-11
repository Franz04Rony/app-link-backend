import { useState } from "react"
import Button from "../atomic/atoms/Button/Button"
import { Header } from "../atomic/molecules/Header/Header"
import s from './styles/UpdateUser.module.css'
import { useLocation } from "react-router-dom"


export const UpdateUser = ({
  
}) => {
  
    const {state} = useLocation()
    const {links, userID, profileName, src} = state

    const [data, setData] = useState({
        image: null,
        link: "",
        label: ""
    })

    const patchData = async(url = '', data = {}) => {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return response.json()
    }

    const handleClick = async(links, data, userID) => {
      const newLinks = [...links, data]
      patchData(`http://127.0.0.1:3001/api/users/${userID}`,{
        links: newLinks
      })
    }

    const uploadImage = async(event) =>{
      const formData = new FormData()
      formData.append('file', event.target.files[0] )
      const response = await fetch("http://127.0.0.1:3001/api/files/links", {
        method: 'POST',
        body: formData,
    
      })
      const resp = await response.json()
      const {secureUrl} = resp
      setData({...data, image:secureUrl})
    }

  return (
    <div>
      <Header
        profileName={profileName}
        src={src}
      />
      <div className={s.box}>
        <div className={s.header}>
          <div></div>
          <h1 className={s.title}> Add a new link </h1>
          <Button
            label="add"
            onClick={() => handleClick(links,data, userID)} 
          />
        </div>
        <div className={s.form}>

            <label className={s.image}>
              <img src={data.image ? data.image : "https://th.bing.com/th/id/OIG.s9mB6..wYYm1x1cRK3wA?pid=ImgGn"} alt="nueva imagen" />
              {/* <img src="https://th.bing.com/th/id/OIG.s9mB6..wYYm1x1cRK3wA?pid=ImgGn" alt="nueva imagen" /> */}
              <input 
                type="file" 
                name="upload-img" 
                accept="image/*"
                onChange={ uploadImage }
              />
            </label>


          <div className={s.newData}>

            <div className={s.inputBox}>
              <input 
                type="text" 
                autoComplete="off" 
                minLength="0" 
                maxLength="1023" 
                placeholder="https://example.com" 
                className={s.input}
                onChange={e => setData({...data, link: e.target.value })}
                />
            </div>

            <div className={s.inputBox}>
              <input 
                type="text" 
                autoComplete="off" 
                minLength="0" 
                maxLength="1023" 
                placeholder="Ejemplo de título"
                className={s.input}
                onChange={e => setData({...data, label: e.target.value })}
                />
            </div>

          </div>
        </div>
      </div>
    </div>
    
  )
}
