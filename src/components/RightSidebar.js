import React, { useState } from 'react'

import LanguageSelector from './LanguageSelector'
import UserInfo from './UserInfo'
import { useUserContext } from '../contexts/UserContext'
import { useTranslation } from 'react-i18next'
import FormModal from './FormModal'
import LoginFormModal from './LoginFormModal'
import { useHistory } from 'react-router'

import { Button } from 'react-bootstrap'
function RightSidebar() {
  const { user, resetUser } = useUserContext()
  const history = useHistory()
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const { loginBtn, contactUsBtn, languageDropDown, homeBtn } = t(
    'rightSideBar',
    {
      returnObjects: true,
    }
  )
  /*"languageDropDown": "Language",
    "logoutBtn": "Logout",
    "loginBtn": "Login",
    "contactUsBtn": "Contact Us" */
  return (
    <div className='p-2' style={{ height: '100%', width: '100%' }}>
      <LanguageSelector text={languageDropDown} />
      <div className='mt-1'>
        {user ? (
          <UserInfo />
        ) : (
          <Button variant='primary' onClick={() => setShow(true)}>
            {loginBtn}
          </Button>
        )}
      </div>
      <Button className='mt-1 d-block' onClick={() => history.push('/')}>
        {homeBtn}
      </Button>
      <Button className='mt-1' onClick={() => history.push('/contactus')}>
        {contactUsBtn}
      </Button>

      <LoginFormModal show={show} closeModal={() => setShow(false)} />
    </div>
  )
}

export default RightSidebar
