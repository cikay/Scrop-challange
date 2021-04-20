import FormModal from './FormModal'
import { useTranslation } from 'react-i18next'
import { useUserContext } from '../contexts/UserContext'

export default function LoginFormModal({ closeModal, show }) {
  const { t } = useTranslation()
  const { setUser } = useUserContext()

  const columns = [
    { Header: t('loginNameInputPlaceHolder'), accessor: 'name' },
    { Header: t('loginEmailInputPlaceHolder'), accessor: 'email' },
    { Header: t('loginPasswordInputPlaceHolder'), accessor: 'password' },
  ]

  return (
    <>
      <FormModal
        columns={columns}
        cancelBtnText={t('cancel')}
        submitBtnText={t('login')}
        onSubmit={setUser}
        show={show}
        closeModal={closeModal}
      />
    </>
  )
}
