import { createContext, useEffect, useState } from 'react'

export const SessionContext = createContext()

const SessionContextProvider = (props) => {
  const [token, setToken] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const verifyToken = async currentToken => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/verify`, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    })
    console.log(response)
    if (response.status === 200) {
      const parsed = await response.json()
      setToken(currentToken)
      setIsLoggedIn(true)
      console.log("I am parsed", parsed)
    }
    setIsLoading(false)
    console.log("first")
  }

  useEffect(() => {
    const localToken = localStorage.getItem('authToken')
    if (localToken) {
      verifyToken(localToken)
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token)
      setIsLoading(false)
      console.log('second')
    } else {
      localStorage.removeItem('authToken')
    }
  }, [token])

  const logout = () => {
    setToken()
    localStorage.removeItem('authToken')
    setIsLoggedIn(false)
  }

  return (
    <SessionContext.Provider value={{ token, setToken, isLoggedIn, isLoading, logout, verifyToken }}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider