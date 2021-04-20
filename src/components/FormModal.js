import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import CustomizedModal from './CustomizedModal'
import CustomizedForm from './CustomizedForm'

export default function FormModal({
  closeModal,
  show,
  cancelBtnText,
  submitBtnText,
  onSubmit,
  inputs,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  console.log('submit btn in form modal', submitBtnText)
  const handleChange = (e) => {
    const { id, value } = e.target

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formData', formData)
    onSubmit(formData)
    closeModal()
  }

  return (
    <CustomizedModal show={show} onHide={closeModal} title={submitBtnText}>
      <CustomizedForm
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submitBtnText={submitBtnText}
      />
      <Button className='mt-3' variant='secondary' onClick={closeModal}>
        {cancelBtnText}
      </Button>
    </CustomizedModal>
  )
}
