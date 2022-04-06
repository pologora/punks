import React, { useState } from 'react'
import attributes from '../../data/attributesJson/attributesArray.json'
import { BsFilter } from 'react-icons/bs'
import './Filter.css'
import { IoMdClose } from 'react-icons/io'

const startCheckboxes = {}

for (let i = 0; i < attributes.attributes.length; i++) {
  if (attributes.attributes[i] == 'all') {
    startCheckboxes['allAttributes'] = true
  }
  startCheckboxes[attributes.attributes[i]] = false
}
for (let i = 0; i < attributes.attributes_count.length; i++) {
  if (attributes.attributes[i] == 'all') {
    startCheckboxes['allCount'] = true
  }
  startCheckboxes[attributes.attributes_count[i]] = false
}
for (let i = 0; i < attributes.rank.length; i++) {
  if (attributes.attributes[i] == 'all') {
    startCheckboxes['allRank'] = true
  }
  startCheckboxes[attributes.rank[i]] = false
}
for (let i = 0; i < attributes.type.length; i++) {
  if (attributes.attributes[i] == 'all') {
    startCheckboxes['allType'] = true
  }
  startCheckboxes[attributes.type[i]] = false
}

function Filter() {
  const [isOpenGrid, setIsOpenGrid] = useState(false)
  const [isChecked, setIsChecked] = useState(startCheckboxes)


  const handleOnChange = (e) => {
    const { name, checked } = e.target
    console.log(name)
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }))
  }

  const inputItemsGenerator = (attributesArray, allName) => {
    const attributesItems = attributesArray.map((attribute) => {
      if (attribute == 'all') {
        return (
          <div key={allName} className='filter__sort-item'>
            <input
              type='checkbox'
              id={allName}
              name={allName}
              onChange={handleOnChange}
              checked={isChecked[allName]}
            />
            <label htmlFor={allName}>all</label>
          </div>
        )
      }
      return (
        <div key={attribute} className='filter__sort-item'>
          <input
            type='checkbox'
            id={attribute}
            name={attribute}
            onChange={handleOnChange}
            checked={isChecked[attribute]}
          />
          <label htmlFor={attribute}>{attribute}</label>
        </div>
      )
    })
    return attributesItems
  }

  const attributesItems = inputItemsGenerator(attributes.attributes, 'allAttributes')
  const rankSortItems = inputItemsGenerator(attributes.rank, 'allRank')
  const typeItems = inputItemsGenerator(attributes.type, 'allType')
  const attributesCountItems = inputItemsGenerator(attributes.attributes_count, 'allCount')

  return (
    <div className='filter'>
      <button className='filter__open-btn btn' onClick={() => setIsOpenGrid(true)}>
        <div className='filter__icon-container'>
          <BsFilter className='filter__open-icon' />
          <span className='filter__open-icon-text'>filter</span>
        </div>
      </button>
      <div className={`filter__grid ${isOpenGrid ? 'active' : null}`}>
        <h1>Filter</h1>
        <div className='filter__grid-close-btn-container'>
          <button className='filter__grid-close-btn btn'>
            <IoMdClose className='filter__grid-close-icon' onClick={() => setIsOpenGrid(false)} />
          </button>
        </div>
        <div className='filter__sort-container'>
          <div className='filter__sort-title'>Sort items</div>
          <div className='filter__sort-items'>{rankSortItems}</div>
        </div>
        <div className='filter__sort-container'>
          <div className='filter__sort-title'>Filter by type</div>
          <div className='filter__sort-items'>{typeItems}</div>
        </div>
        <div className='filter__sort-container'>
          <div className='filter__sort-title'>Filter by attributes count</div>
          <div className='filter__sort-items'>{attributesCountItems}</div>
        </div>
        <div className='filter__sort-container'>
          <div className='filter__sort-title'>Filter by attributes</div>
          <div className='filter__sort-items'>{attributesItems}</div>
        </div>
      </div>
    </div>
  )
}

export default Filter
