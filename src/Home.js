import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return <div>{t('home_page')}</div>
}

export default Home
