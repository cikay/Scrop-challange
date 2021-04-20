import React, { useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import { Button } from 'react-bootstrap'
import UserInfo from './components/UserInfo'
import { useUserContext } from './contexts/UserContext'
import { useTranslation } from 'react-i18next'
import FormModal from './components/FormModal'
import LoginFormModal from './components/LoginFormModal'
function RightSidebar() {
  const { user } = useUserContext()
  const { t } = useTranslation()
  const [show, setShow] = useState(false)

  return (
    <div className='mt-2'>
      <LanguageSelector />
      <div className='mt-1'>
        {user ? (
          <UserInfo />
        ) : (
          <Button variant='primary' onClick={() => setShow(true)}>
            {t('login')}
          </Button>
        )}
      </div>
      <LoginFormModal show={show} closeModal={() => setShow(false)} />
    </div>
  )
}

export default RightSidebar
