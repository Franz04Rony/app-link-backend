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
        image: "https://w0.peakpx.com/wallpaper/372/865/HD-wallpaper-kekkai-sensen-leo-leonardo-watch-thumbnail.jpg",
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
      console.log(data)
      console.log(links)
      const newLinks = [...links, data]
      console.log(newLinks)
      patchData(`http://127.0.0.1:3001/api/users/${userID}`,{
        links: newLinks
      })
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
          <div className={s.image}>
            <img src={data.image} alt="nueva imagen" />
          </div>
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
