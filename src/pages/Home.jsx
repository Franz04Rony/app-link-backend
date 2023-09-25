import { useState } from "react"
import { useEffect } from "react"

import {PerfilPicture} from "../atomic/atoms/PerfilPicture/PerfilPicture"
import { BoxLink } from "../atomic/molecules/BoxLink/BoxLink"
import { Header } from "../atomic/molecules/Header/Header"

import s from './Home.module.css'

const getData = async(id) =>{
  const url = `http://127.0.0.1:3001/api/users/${id}`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

const  getImages = (id) => {
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [links, setLinks] = useState([])

  const getUser = async() => {
    const newUser = await getData(id)
    setUser(newUser)
    setIsLoading(false)
    setLinks(newUser.links) 
  }
  useEffect(()=>{
    getUser()
  }, [])

  return {
    user,
    isLoading,
    links
  }
}

export const Home = ({
  perfil,
  menu
}) => {
  const {user, isLoading, links} = getImages('e500b68a-f703-4779-941b-3b2180b4b328')
  console.log(links)
  
  return (
    <>
      <Header 
        profileName={user.name}
        src={user.perfilImage}
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
  menu: [
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/user/upload/image/21587ca9-e9bf-49fe-a11b-8eab79241cd6.png?f=webp',
      label: 'Threads',
      link: 'https://myanimelist.net/profile/EnNvy',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube1',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube2',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube3',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube4',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube5',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube6',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube7',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube8',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube9',
    },
    {
      image: 'https://cdn.static.linkr.bio/thumb/80x80/cover/85/static/linkr/icon/thumbnails/9.YouTube.png?f=webp',
      label: ' YouTube10',
    },
  ]
}
