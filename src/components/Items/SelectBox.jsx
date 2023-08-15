import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function BasicSelect(props) {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)

    props.setQuestions((prev) => ({
      ...prev,
      [props.text]: {
        question: props.text,
        answer: e.target.value,
      },
    }))
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          ({props.dataIndex + 1 + '.' + (props.resourceIndex + 1)})
          {props.resourceItem?.text}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={`choice-${props.resourceItem.linkId}`}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>

          {props?.answerOption?.map((answerOptionItem, answerOptionIndex) => {
            return (
              <MenuItem value={answerOptionItem?.valueCoding?.code}>
                {answerOptionItem?.valueCoding?.display}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
