import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomizedDropDown from './CustomizedDropDown'
const items = [
  { name: 'Turkish', accessor: 'tr' },
  { name: 'English', accessor: 'en' },
]
const LanguageSelector = ({ className, text }) => {
  const { i18n } = useTranslation()

  const changeLanguage = (e) => {
    const value = e.target.getAttribute('value')
    console.log('value', value)
    console.log('target', e.target)
    i18n.changeLanguage(value)
  }

  return (
    <>
      <CustomizedDropDown
        btnName={text}
        items={items}
        onClick={changeLanguage}
        className={className}
      />
    </>
  )
}

export default LanguageSelector
