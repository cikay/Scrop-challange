import React from 'react'
import { useUserContext } from '../contexts/UserContext'
function PrivateComponet(component) {
  const { user } = useUserContext()
  return <>{user && component}</>
}

export default PrivateComponet
