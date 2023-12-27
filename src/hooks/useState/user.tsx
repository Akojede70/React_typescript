import React from 'react'
import { useState } from "react"


type AuthUser = {
    name: string
    email: string
}

const user = () => {
    const [user, setUser] = useState<AuthUser | null> (null)
    // const [user, setUser] = useState<AuthUser> ({} as AuthUser) //not considering null
    const handleLogin = () => {
        setUser({
            name: "Peter",
            email: "PeterBasss@gmail.com",
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>User name is {user?.name}</div>
      <div>User name is {user?.email}</div>
    </div>
  )
}

export default user
