import * as React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
import dayjs from 'dayjs'

export default function DatePickerCustom({ text, setQuestions, answerAndQuestion, props }) {
   


  console.log(answerAndQuestion)
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={['DatePicker']}
          sx={{
            paddingLeft: 1,
          }}
        >
          <DatePicker
            onChange={(e) => {
             
              let date = e.format('MM-DD-YYYY')
            
              setQuestions((prev) => ({
                ...prev,
                [text]: {
                  question: text,
                  answer: date,
                },
              }))
            }}
            sx={{
              width: '100%',
            }}
            label={text}
            defaultValue={dayjs(answerAndQuestion?.answer)}
          
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  )
}
