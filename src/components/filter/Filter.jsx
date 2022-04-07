import React, { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import './Filter.css'
import { IoMdClose } from 'react-icons/io'
import attributesData from '../../data/attributesJson/attributesArray.json'

const { attributes, attributes_count, rank, type } = attributesData

//TODO: add sort f-on
function Filter({
  isCheckedAttributes,
  handleOnChangeAttributes,
  isCheckedRank,
  handleOnChangeRank,
  isCheckedType,
  handleOnChangeType,
  isCheckedCount,
  handleOnChangeCount,
}) {
  const [isOpenGrid, setIsOpenGrid] = useState(false)

  const inputItemsGenerator = (attributesArray, allName, state, handlerOnChange) => {
    const attributesItems = attributesArray.map((attribute) => {
      if (attribute === 'all') {
        return (
          <div key={allName} className={`filter__sort-item ${state[allName] && 'filter__sort-item--checked'}`}>
            <input type='checkbox' id={allName} name={allName} onChange={handlerOnChange} checked={state[allName]} />
            <label htmlFor={allName}>all</label>
          </div>
        )
      }
      return (
        <div key={attribute} className={`filter__sort-item ${state[attribute] && 'filter__sort-item--checked'}`}>
          <input
            type='checkbox'
            id={attribute}
            name={attribute}
            onChange={handlerOnChange}
            checked={state[attribute]}
          />
          <label htmlFor={attribute}>{attribute}</label>
        </div>
      )
    })
    return attributesItems
  }

  const attributesItems = inputItemsGenerator(
    attributes,
    'allAttributes',
    isCheckedAttributes,
    handleOnChangeAttributes
  )
  const rankSortItems = inputItemsGenerator(rank, 'allRank', isCheckedRank, handleOnChangeRank)
  const typeItems = inputItemsGenerator(type, 'allType', isCheckedType, handleOnChangeType)
  const attributesCountItems = inputItemsGenerator(attributes_count, 'allCount', isCheckedCount, handleOnChangeCount)

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
        {/* <div className='filter__sort-container'>
          <div className='filter__sort-title'>Sort items</div>
          <div className='filter__sort-items'>{rankSortItems}</div>
        </div> */}
        <div className='filter__sort-container'>
          <div className='filter__sort-title'>Filter by type</div>
          <div className='filter__sort-items'>{typeItems}</div>
        </div>
        {/* <div className='filter__sort-container'>
          <div className='filter__sort-title'>Filter by attributes count</div>
          <div className='filter__sort-items'>{attributesCountItems}</div>
        </div> */}
        <div className='filter__sort-container'>
          <div className='filter__sort-title'>Filter by attributes</div>
          <div className='filter__sort-items'>{attributesItems}</div>
        </div>
      </div>
    </div>
  )
}

export default Filter
