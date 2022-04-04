import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Punk from '../punk/Punk'
import './PunksGallery.css'
import allPunksJson from '../../data/allinonejson/punks_objects.json'

function PunksGallery({ punks }) {
  const [punksJsonArray, setPunksJsonArray] = useState([])
  const [punksIDs, setPunksIds] = useState([])

  useEffect(() => {
    getPunksIds()
  }, [])

  const observer = useRef()

  const lastPank = useCallback(
    (node) => {
      console.log(node)
      console.log(punks)

      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPunksIds((prevIds) => {
            const punksLeftToRender = punks.length - prevIds.length
            const newArray = []
            const lastElemId = prevIds.length + 30
            const lastLess30 = prevIds.length + punksLeftToRender
            if (punksLeftToRender >= 30) {
              for (let i = prevIds.length; i < lastElemId; i++) {
                newArray.push(punks[i])
              }
            } else if (punksLeftToRender > 0 && punksLeftToRender < 30) {
              for (let i = prevIds.length; i < lastLess30; i++) {
                newArray.push(punks[i])
              }
            }
            return [...prevIds, ...newArray]
          })
        }
      })
      if (node) observer.current.observe(node)
    },
    [punks]
  )

  useEffect(() => {
    setPunksIds([])
    getPunksIds()
  }, [punks])

  useEffect(() => {
    getPunksJson(punksIDs)
  }, [punksIDs])

  
  function getPunksJson(punksId) {
    console.log(punksIDs)
    const punksJson = []
    for (let index = 0; index < punksId.length; index++) {
      const punk = allPunksJson.filter(
        (elem) => elem.edition === punksId[index]
      )
      punksJson.push(punk[0])
    }
    setPunksJsonArray(punksJson)
  }

  const getPunksIds = () => {
    const punksIds = []
    if (punks.length > 30) {
      for (let i = 0; i < 30; i++) {
        punksIds.push(punks[i])
      }
    } else
      for (let i = 0; i < punks.length; i++) {
        punksIds.push(punks[i])
      }
    setPunksIds(punksIds)
  }

  const renderPunksList = punksJsonArray.map((punk, index) => {
    if (punksJsonArray.length === index + 1 && punksJsonArray.length > 29) {
      return (
        <Link to={`/info/${punk.edition}`} key={punk.edition} ref={lastPank}>
          <Punk
            src={require(`../../data/punks_images/${punk.edition}.png`)}
            key={punk.edition}
            edition={punk.edition}
            type={punk.attributes[0].value}
            rank={punk.attributes[2].value}
          />
        </Link>
      )
    } else {
      return (
        <Link to={`/info/${punk.edition}`} key={punk.edition}>
          <Punk
            src={require(`../../data/punks_images/${punk.edition}.png`)}
            key={punk.edition}
            edition={punk.edition}
            type={punk.attributes[0].value}
            rank={punk.attributes[2].value}
          />
        </Link>
      )
    }
  })
  return <div className='punksGallery'>{renderPunksList}</div>
}

export default PunksGallery
