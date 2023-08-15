import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function CustomTextField(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={props.text}
        onChange={(e) => {
          props.setQuestions((prev) => ({
            ...prev,
            [props.text]: {
              question: props.text,
              answer: e.target.value,
            },
          }))
        }}
        variant="outlined"
      />
    </Box>
  )
}
