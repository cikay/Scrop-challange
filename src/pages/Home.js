import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  const { text, title } = t('homePage', { returnObjects: true })
  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
    </>
  )
}

export default Home
