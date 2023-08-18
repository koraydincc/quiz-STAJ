import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

// let questions = {}

// questions.deneme123 = '123213123'
// // questions.Do you have allergies? = 'wqeqwewq'
// questions['Do you have allergies?'] = 'weqweqwe'

// questions['Do you have allergies?']
export default function RadioButtonsGroup(props) {


  console.log(props.answerAndQuestion, 'radddadsadasdsadsadasd')
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        {props.question}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => {
          props.setQuestions((prev) => ({
            ...prev,
            [props.question]: {
              question: props.question,
              answer: e.target.value,
            },
          }))
        }}
      >
        <FormControlLabel
          value="Yes"
          control={<Radio size="small" />}
          label="Yes"
          checked={props?.answerAndQuestion?.answer == 'Yes'? true : false  }
        />
        <FormControlLabel
          value="No"
          control={<Radio size="small" />}
          label="No"
          checked={props?.answerAndQuestion?.answer == 'No'? true : false  }

        />
      </RadioGroup>
      
    </FormControl>
  )
}
