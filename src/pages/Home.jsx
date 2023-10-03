import { useState } from "react"
import { useEffect } from "react"

import {PerfilPicture} from "../atomic/atoms/PerfilPicture/PerfilPicture"
import { BoxLink } from "../atomic/molecules/BoxLink/BoxLink"
import { Header } from "../atomic/molecules/Header/Header"

import { getUser } from "../API/getUser"

import s from './styles/Home.module.css'

export const Home = ({
  perfil,
  menu
}) => {
  const {user, links} = getUser('daa11c07-c422-4d62-81a0-ff81fdbae3ab')
  
  return (
    <>
      <Header 
        profileName={user.name}
        src={user.perfilImage}
        links={links}
        userID={user.userID}
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
