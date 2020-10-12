import React from "react"
import  "./category.css"

import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Category = ({name}) => (
  <Select options={options} placeholder={name} />
)
export default Category
