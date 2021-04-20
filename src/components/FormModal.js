import React, { useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import CustomizedModal from './CustomizedModal'

const htmlInputTypes = ['text', 'email', 'password']
export default function ModelFormModal({
  closeModal,
  show,
  cancelBtnText,
  submitBtnText,
  onSubmit,
  columns,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

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
      <Card className='w-100' style={{ maxWidth: '430px' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {columns.map((column) => {
              console.log('column', column)
              return (
                <Form.Group id={column.accessor}>
                  <Form.Control
                    required
                    type={
                      htmlInputTypes.indexOf(column.accessor) === -1
                        ? 'text'
                        : column.accessor
                    }
                    id={column.accessor}
                    placeholder={column.Header}
                    onChange={handleChange}
                  />
                </Form.Group>
              )
            })}
            <Button
              className='float-right mt-2'
              variant='primary'
              type='submit'
            >
              {submitBtnText}
            </Button>
          </Form>
          <Button className='mt-3' variant='secondary' onClick={closeModal}>
            {cancelBtnText}
          </Button>
        </Card.Body>
      </Card>
    </CustomizedModal>
  )
}
