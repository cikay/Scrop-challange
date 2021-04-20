import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
const pagePathToAccesor = {
  '/': 'home',
  contactus: 'contactus',
}
function LeftSidebar() {
  const { t } = useTranslation()
  const location = useLocation()
  console.log('location', location)
  const pageNameAccessor = pagePathToAccesor[location.pathname]

  return (
    <div className='p-2'>
      <h3>{t(pageNameAccessor)}</h3>
    </div>
  )
}

export default LeftSidebar
