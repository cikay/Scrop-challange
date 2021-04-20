import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const { text } = t('footer', { returnObjects: true })
  return (
    <footer className='d-flex justify-content-center align-items-center'>
      <div>{text}</div>
    </footer>
  )
}

export default Footer
