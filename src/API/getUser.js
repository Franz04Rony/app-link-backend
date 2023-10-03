import { useEffect, useState } from "react"

const getData = async(id) =>{
    const url = `http://127.0.0.1:3001/api/users/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}

  export const getUser = (id) => {
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