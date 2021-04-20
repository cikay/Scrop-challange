import React, { useState, useContext } from 'react'

const UserContext = React.createContext()
const useUserContext = () => useContext(UserContext)
function UserProvider({ children }) {
  const [user, setUser] = useState()
  function resetUser() {
    setUser()
  }

  const value = { user, setUser, resetUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserProvider, useUserContext }
