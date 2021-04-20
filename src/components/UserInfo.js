import userEvent from '@testing-library/user-event'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useUserContext } from '../contexts/UserContext'
import CustomizedDropDown from './CustomizedDropDown'

function UserInfo() {
  const { t } = useTranslation()

  const { user, resetUser } = useUserContext()
  const { logoutBtn } = t('rightSideBar', { returnObjects: true })
  const items = [{ name: user.email }, { name: logoutBtn, onClick: resetUser }]
  return (
    <>
      <CustomizedDropDown btnName={user.name} items={items} />
    </>
  )
}

export default UserInfo
