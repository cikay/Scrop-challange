import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

function CustomizedForm({
  inputs,
  handleSubmit,
  handleChange,
  formData,
  submitBtnText,
  selectElementInfo,
  textarea,
}) {
  console.log('selected', selectElementInfo)
  return (
    <Card className='w-100' style={{ maxWidth: '430px' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input) => {
            return (
              <Form.Group key={input.accessor}>
                <Form.Control
                  required
                  type={input.type}
                  id={input.accessor}
                  placeholder={input.placeholder}
                  onChange={handleChange}
                  defaultValue={formData?.[input.accessor]}
                />
              </Form.Group>
            )
          })}
          {selectElementInfo && (
            <Form.Group key={selectElementInfo.accessor}>
              <Form.Control
                as='select'
                id={selectElementInfo.accessor}
                className='selectpicker'
                data-live-search='true'
                onChange={handleChange}
              >
                <option value='' selected disabled hidden>
                  {selectElementInfo.disableSelected}
                </option>
                {Object.keys(selectElementInfo.options).map((key) => (
                  <option key={key}>{selectElementInfo.options[key]}</option>
                ))}
              </Form.Control>
            </Form.Group>
          )}
          {textarea && (
            <Form.Group key={textarea.accessor}>
              <Form.Control
                as='textarea'
                onChange={handleChange}
                placeholder={textarea.placeholder}
                id={textarea.accessor}
                className='btn'
                contentEditable={false}
                rows={4}
              />
            </Form.Group>
          )}
          <Button className='float-right mt-2' variant='primary' type='submit'>
            {submitBtnText}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CustomizedForm
