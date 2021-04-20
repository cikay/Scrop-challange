import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
const pagePathNameToAccesor = {
  '/': 'home',
  '/contactus': 'contactus',
}

function LeftSidebar() {
  const { t } = useTranslation()
  const location = useLocation()
  const letfSidebarObj = t('leftSideBar', { returnObjects: true })

  console.log('location', location)
  const pageNameAccessor = pagePathNameToAccesor[location.pathname]
  const pageName = letfSidebarObj[pageNameAccessor]
  console.log('pageNameAccessor', pageNameAccessor)
  console.log('page name', pageName)
  console.log('letfSidebarObj', letfSidebarObj)
  return (
    <div className='p-2'>
      <h3>{pageName}</h3>
    </div>
  )
}

export default LeftSidebar
