import FormModal from './FormModal'
import { useTranslation } from 'react-i18next'
import { useUserContext } from '../contexts/UserContext'

export default function LoginFormModal({ closeModal, show }) {
  const { t } = useTranslation()
  const { setUser } = useUserContext()
  const { name, email, password, submitBtn, cancelBtn } = t('loginModal', {
    returnObjects: true,
  })
  console.log('submitBtn', submitBtn)
  console.log('cancelBtn', cancelBtn)
  const inputs = [
    {
      placeholder: name,
      accessor: 'name',
      type: 'text',
    },
    {
      placeholder: email,
      accessor: 'email',
      type: 'email',
    },
    {
      placeholder: password,
      accessor: 'password',
      type: 'password',
    },
  ]

  return (
    <>
      <FormModal
        inputs={inputs}
        cancelBtnText={cancelBtn}
        submitBtnText={submitBtn}
        onSubmit={setUser}
        show={show}
        closeModal={closeModal}
      />
    </>
  )
}
