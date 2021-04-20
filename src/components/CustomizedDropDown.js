import React from 'react'
import { Dropdown } from 'react-bootstrap'

function CustomizedDropDown({ btnName, items, onClick, className }) {
  return (
    <>
      <Dropdown className={className}>
        <Dropdown.Toggle variant='primary' id='dropdown-basic'>
          {btnName}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {items.map((item) => {
            return (
              <Dropdown.Item
                key={item.accessor}
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
