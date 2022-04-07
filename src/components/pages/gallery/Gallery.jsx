import React, { useState, useEffect } from 'react'
import './Gallery.css'
import Search from '../../search/Search'
import PunksGallery from '../../punksGallery/PunksGallery'
import Filter from '../../filter/Filter'
import attributesData from '../../../data/attributesJson/attributesArray.json'
import allPunksJson from '../../../data/allinonejson/punks_objects.json'

const startPunksId = []
for (let i = 0; i < 10000; i++) {
  startPunksId.push(i)
}
//lists of attributes needed for checkboxes generation
const { attributes, attributes_count, rank, type } = attributesData

const startCheckboxesValue = (attributesArray, allName) => {
  const startCheckboxObj = {}
  for (let i = 0; i < attributesArray.length; i++) {
    if (attributesArray[i] === 'all') {
      startCheckboxObj[allName] = true
    } else startCheckboxObj[attributesArray[i]] = false
  }
  return startCheckboxObj
}

const attributesCheckboxesInitialValue = startCheckboxesValue(attributes, 'allAttributes')
const rankCheckboxesInitialValue = startCheckboxesValue(rank, 'allRank')
const typeCheckboxesInitialValue = startCheckboxesValue(type, 'allType')
const countCheckboxesInitialValue = startCheckboxesValue(attributes_count, 'allCount')

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('')
  //punks id for rendering
  const [punksId, setPunksID] = useState(startPunksId)
  const [isCheckedAttributes, setIsCheckedAttributes] = useState(attributesCheckboxesInitialValue)
  const [isCheckedRank, setIsCheckedRank] = useState(rankCheckboxesInitialValue)
  const [isCheckedType, setIsCheckedType] = useState(typeCheckboxesInitialValue)
  const [isCheckedCount, setIsCheckedCount] = useState(countCheckboxesInitialValue)
  const [activeFilter, setActiveFilter] = useState([])

  // console.log([])
  useEffect(() => {
    const getActiveFiltersArray = (...args) => {
      const activeFilters = []
      for (let i = 0; i < args.length; i++) {
        const array = Object.entries(args[i])
        const filteredArray = array.filter((item) => item[1])
        for (const item of filteredArray) {
          if (item[0] !== 'allAttributes' && item[0] !== 'allRank' && item[0] !== 'allType' && item[0] !== 'allCount') {
            activeFilters.push(item[0])
          }
        }
      }
      return activeFilters
    }
    const activeFilters = getActiveFiltersArray(isCheckedAttributes, isCheckedRank, isCheckedType, isCheckedCount)
    setActiveFilter(activeFilters)
  }, [isCheckedAttributes, isCheckedRank, isCheckedType, isCheckedCount])

  useEffect(() => {
    if (activeFilter.length) {
      const filter = (attr) => {
        let array = []
        attr.map((attribute) => {
          const filteredArray = allPunksJson.filter((item) => {
            for (let i = 0; i < item.attributes.length; i++) {
              if (item.attributes[i].value === attribute) {
                return item
              }
            }
          })
          array = array.concat(filteredArray)
        })
        return array
      }
      let filterPunksIds = filter(activeFilter).map((item) => item.edition)
      filterPunksIds = [...new Set(filterPunksIds)]
      filterPunksIds.sort((a, b) => a - b)
      setPunksID(filterPunksIds)
    } else setPunksID(startPunksId)
  }, [activeFilter])

  //TODO:create one handler function for checkboxes change state
  const handleOnChangeAttributes = (e) => {
    const { name, checked } = e.target
    if (name === 'allAttributes') {
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
    if (name === 'allRank') {
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
    if (name === 'allType') {
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
    if (name === 'allCount') {
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  //render punk by id from search input
  useEffect(() => {
    if (!searchTerm) {
      setPunksID(startPunksId)
      setIsCheckedAttributes(attributesCheckboxesInitialValue)
      setIsCheckedRank(rankCheckboxesInitialValue)
      setIsCheckedType(typeCheckboxesInitialValue)
      setIsCheckedCount(countCheckboxesInitialValue)
    }
    if (+searchTerm >= 1 && +searchTerm <= 9999) {
      const newPunkId = [+searchTerm]
      setPunksID(newPunkId)
    }
  }, [searchTerm])

  return (
    <div className='gallery-page'>
      <div className='gallery-page__header'>
        <h1>Gallery</h1>
        <div className='gallary-page__search-container'>
          <Search searchTerm={searchTerm} handleSearch={handleSearch} type={'number'} />
          <Filter
            isCheckedAttributes={isCheckedAttributes}
            isCheckedRank={isCheckedRank}
            isCheckedType={isCheckedType}
            isCheckedCount={isCheckedCount}
            handleOnChangeAttributes={handleOnChangeAttributes}
            handleOnChangeRank={handleOnChangeRank}
            handleOnChangeType={handleOnChangeType}
            handleOnChangeCount={handleOnChangeCount}
          />
        </div>
      </div>

      <div className='gallery-page__gallery'>
        <PunksGallery punks={punksId} />
      </div>
    </div>
  )
}

export default Gallery
