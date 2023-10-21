import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import {PerfilPicture} from "../atomic/atoms/PerfilPicture/PerfilPicture"
import { BoxLink } from "../atomic/molecules/BoxLink/BoxLink"
import { Header } from "../atomic/molecules/Header/Header"

import { getUser } from "../API/getUser"

import s from './styles/Home.module.css'

export const Home = ({
  perfil,
  menu,
  
}) => {

  const {state} = useLocation()
  const {user, links} = getUser(state.user.userID)

  const [isAuthorized, setIsAuthorized] = useState(true)

  return (
    <>
      <Header 
        user={user}
        links={links}
        isAuthorized={isAuthorized}
      />
      <div className={s.MainBox}>
        <div className={s.box}>
          <div className={s.picture}>
            <PerfilPicture src={user.perfilImage}/>
            <div>{user.name}</div>
          </div>
          {
            links.map((e)=>(
              <BoxLink
                key = {e.label}
                image = {e.image}
                label = {e.label}
                link = {e.link}
              />
            ))
          }
        </div>
      </div>

    </>
  )
}

Home.defaultProps = {
  perfil: {
    src: '',
    name: 'Tadano Hitohito',
  },
  
}
