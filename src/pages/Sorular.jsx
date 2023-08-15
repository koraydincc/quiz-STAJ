import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from 'fhir-kit-client'
import styled from '@emotion/styled'
import Number from '../components/Items/Number'
import RadioButtonsGroup from '../components/Items/RadioButton'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import CustomTextField from '../components/Items/TextField'
import DatePickerCustom from '../components/Items/DateBox'

export default function Sorular() {
  let { id } = useParams()
  const [data, setData] = useState([])
  const [selectedAnket, setSelectedAnket] = useState(null)

  const [questions, setQuestions] = useState({})

  useEffect(() => {
    fetchQuestionList()
  }, [])

  const fetchQuestionList = async () => {
    try {
      const client = new Client({ baseUrl: 'https://hapi.fhir.org/baseR4' })
      const response = await client.search({
        resourceType: 'Questionnaire',
        searchParams: {},
      })

      setData(response?.entry || [])
    } catch (error) {
      console.error('Veri çekme hatası!', error)
      setData([]) // Veri çekme hatası durumunda data state'ini boş bir dizi olarak güncelliyoruz.
    }
  }

  console.log(questions, 'questions')

  useEffect(() => {
    let currentData = data.filter((item, index) => item.resource.id === id)
    setSelectedAnket(currentData[0])
  }, [data])

  const renderQuestionItem = (item, resourceIndex) => {
    if (item?.item?.length > 0) {
      return (
        <div style={{}} key={`resourceItem-${resourceIndex}`}>
          {item.item.map((subItem, subIndex) =>
            renderQuestionItem(subItem, `${resourceIndex}.${subIndex}`)
          )}
        </div>
      )
    } else {
      switch (item.type) {
        case 'boolean':
          return (
            <div key={`resourceItem-${resourceIndex}`}>
              <RadioButtonsGroup
                question={item.text}
                setQuestions={setQuestions}
              />
            </div>
          )
        case 'group':
          return (
            <div key={`resourceItem-${resourceIndex}`}>
              <RadioButtonsGroup
                question={item.text}
                setQuestions={setQuestions}
              />
            </div>
          )
        case 'string':
          return (
            <div key={`resourceItem-${resourceIndex}`}>
              <CustomTextField text={item.text} setQuestions={setQuestions} />
            </div>
          )
        case 'date':
          return (
            <div key={`resourceItem-${resourceIndex}`}>
              <DatePickerCustom text={item.text} setQuestions={setQuestions} />
            </div>
          )
        case 'decimal':
          return (
            <div key={`resourceItem-${resourceIndex}`}>
              <Number
                key={resourceIndex + 'integer'}
                resourceItem={item}
                resourceIndex={resourceIndex}
                setQuestions={setQuestions}
              />
            </div>
          )
        case 'display':
          return (
            <div key={`resourceItem-${resourceIndex}`}>
              <RadioButtonsGroup
                question={item.text}
                setQuestions={setQuestions}
              />
            </div>
          )
        case 'integer':
          return (
            <Number
              key={resourceIndex + 'integer'}
              resourceItem={item}
              resourceIndex={resourceIndex}
              setQuestions={setQuestions}
            />
          )
        case 'leaf':
          return (
            <div key={`resourceItem-${resourceIndex}`}>
              <RadioButtonsGroup
                question={item.text}
                setQuestions={setQuestions}
              />
            </div>
          )
        default:
          return null
      }
    }
  }

  return (
    <div>
      <CardContent>
        <Card
          sx={{
            padding: 2,
          }}
        >
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Anket No: {selectedAnket?.resource?.id}
          </Typography>
          {selectedAnket?.resource?.item?.map((resourceItem, resourceIndex) =>
            renderQuestionItem(resourceItem, resourceIndex)
          )}
        </Card>
      </CardContent>
    </div>
  )
}
