import React, { useEffect, useState } from 'react'
import attributesData from '../../data/attributesJson/attributesArray.json'
import { BsFilter } from 'react-icons/bs'
import './Filter.css'
import { IoMdClose } from 'react-icons/io'
//lists of attributes needed for checkboxes generation
const { attributes, attributes_count, rank, type } = attributesData

const startCheckboxesValue = (attributesArray, allName) => {
  const startCheckboxObj = {}
  for (let i = 0; i < attributesArray.length; i++) {
    if (attributesArray[i] == 'all') {
      startCheckboxObj[allName] = true
    } else startCheckboxObj[attributesArray[i]] = false
  }
  return startCheckboxObj
}

const attributesCheckboxesInitialValue = startCheckboxesValue(attributes, 'allAttributes')
const rankCheckboxesInitialValue = startCheckboxesValue(rank, 'allRank')
const typeCheckboxesInitialValue = startCheckboxesValue(type, 'allType')
const countCheckboxesInitialValue = startCheckboxesValue(attributes_count, 'allCount')
//TODO: make better code
function Filter() {
  const [isOpenGrid, setIsOpenGrid] = useState(false)
  const [isCheckedAttributes, setIsCheckedAttributes] = useState(attributesCheckboxesInitialValue)
  const [isCheckedRank, setIsCheckedRank] = useState(rankCheckboxesInitialValue)
  const [isCheckedType, setIsCheckedType] = useState(typeCheckboxesInitialValue)
  const [isCheckedCount, setIsCheckedCount] = useState(countCheckboxesInitialValue)
  const [activeFilter, setActiveFilter] = useState([])

  useEffect(() => {
    const getActiveFiltersArray = (...args) => {
      const activeFilters = []
      for (let i = 0; i < args.length; i++) {
        const array = Object.entries(args[i])
        const filteredArray = array.filter((item) => item[1])
        for (const item of filteredArray) {
          activeFilters.push(item[0])
        }
      }
      console.log(activeFilters)
      return activeFilters
    }
    const activeFilters = getActiveFiltersArray(isCheckedAttributes, isCheckedRank, isCheckedType, isCheckedCount)
    setActiveFilter(activeFilters)
  }, [isCheckedAttributes, isCheckedRank, isCheckedType, isCheckedCount])

  //TODO:create one handler function for checkboxes change state
  const handleOnChangeAttributes = (e) => {
    const { name, checked } = e.target
    if (name == 'allAttributes') {
      setIsCheckedAttributes({
        ...attributesCheckboxesInitialValue,
      })
      return
    }
    setIsCheckedAttributes((prevState) => ({
      ...prevState,
      allAttributes: false,
      [name]: checked,
    }))
  }
  const handleOnChangeRank = (e) => {
    const { name, checked } = e.target
    if (name == 'allRank') {
      setIsCheckedRank({
        ...rankCheckboxesInitialValue,
      })
      return
    }
    setIsCheckedRank((prevState) => ({
      ...prevState,
      allRank: false,
      [name]: checked,
    }))
  }
  const handleOnChangeType = (e) => {
    const { name, checked } = e.target
    if (name == 'allType') {
      setIsCheckedType({
        ...typeCheckboxesInitialValue,
      })
      return
    }
    setIsCheckedType((prevState) => ({
      ...prevState,
      allType: false,
      [name]: checked,
    }))
  }
  const handleOnChangeCount = (e) => {
    const { name, checked } = e.target
    if (name == 'allCount') {
      setIsCheckedCount({
        ...countCheckboxesInitialValue,
      })
      return
    }
    setIsCheckedCount((prevState) => ({
      ...prevState,
      allCount: false,
      [name]: checked,
    }))
  }

  const inputItemsGenerator = (attributesArray, allName, state, handlerOnChange) => {
    const attributesItems = attributesArray.map((attribute) => {
      if (attribute == 'all') {
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
