import React from 'react'
import { Dropdown } from 'react-bootstrap'

function CustomizedDropDown({ btnName, items, onClick }) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='primary' id='dropdown-basic'>
          {btnName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {items.map((item) => {
            console.log('item', item)
            return (
              <Dropdown.Item
                value={item.accessor}
                onClick={onClick || item.onClick}
              >
                {item.name}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default CustomizedDropDown
