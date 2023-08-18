import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function Number(props) {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => {
            props.setQuestions((prev) => ({
              ...prev,
              [props?.resourceItem?.text]: {
                question: props?.resourceItem?.text,
                answer: e.target.value,
              },
            }))
          }}
          id="outlined-basic"
          defaultValue={props?.answerAndQuestion?.answer}
          autoComplete="off"
          label={`${props?.resourceItem?.text}`}
          variant="outlined"
        />
      </Box>
    </>
  )
}
