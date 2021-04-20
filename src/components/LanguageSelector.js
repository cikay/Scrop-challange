import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomizedDropDown from './CustomizedDropDown'
const items = [
  { name: 'Turkish', accessor: 'tr' },
  { name: 'English', accessor: 'en' },
]
const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (e) => {
    const value = e.target.getAttribute('value')
    console.log('value', value)
    console.log('target', e.target)
    i18n.changeLanguage(value)
  }

  return (
    <>
      <CustomizedDropDown
        btnName={t('language')}
        items={items}
        onClick={changeLanguage}
      />
    </>
  )
}

export default LanguageSelector
