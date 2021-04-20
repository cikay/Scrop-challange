import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CustomizedForm from '../components/CustomizedForm'
import { useUserContext } from '../contexts/UserContext'

function ContactUs() {
  const { t } = useTranslation()
  const { user } = useUserContext()
  const [state, setState] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    text: '',
  })
  /**contactUsPage": {
    "contactus": "Contact Us",
    "pageText": "Contact us",
    "form": {
      "name": "Name",
      "phoneNumber": "Phone number",
      "email": "Email",
      "text": "Your Message...",
      "placeholder": "Countries",
      "submitBtnName": "Submit"
    }
  }, */
  const countries = t('countries', { returnObjects: true })
  const { form, pageText, contactus } = t('contactUsPage', {
    returnObjects: true,
  })
  const { name, email, phoneNumber, text, submitBtnName, country } = form
  console.log('counteries', countries)
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
      placeholder: phoneNumber,
      accessor: 'phoneNumber',
      type: 'tel',
    },
  ]

  const handleChange = (e) => {
    const { id, value } = e.target
    console.log('id', id)
    console.log('value', value)
    setState((prevState) => ({ ...prevState, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form data', state)
  }

  return (
    <div>
      <div className='mx-auto'>
        <p className='mt-2'>{pageText}</p>
        <CustomizedForm
          formData={user}
          inputs={inputs}
          selectElementInfo={{
            options: countries,
            disableSelected: country,
            accessor: 'countryCode',
          }}
          submitBtnText={submitBtnName}
          textarea={{
            placeholder: text,
            accessor: 'text',
          }}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default ContactUs
