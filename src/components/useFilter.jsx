/*gets array of attributes and returns punks IDs array*/

import { useEffect, useState } from 'react'
import allPunksJson from '../data/allinonejson/punks_objects.json'

function useFilter(attr) {
  const [attributes, setAttributes] = useState(attr)
  const [punksIds, setPunksIDs] = useState([])

  useEffect(() => {
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
    const filterPunksIds = filter(attributes).map((item) => item.edition)
    setPunksIDs(filterPunksIds)
  }, [attributes])

  return punksIds
}

export default useFilter
