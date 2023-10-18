import React, { useEffect, useState } from 'react'
import Client from 'fhir-kit-client'
import axios from 'axios'
import { List, Typography } from '@mui/material'

function Answers() {


  const [answerData, setAnswerData] = useState([])


  const fetchAnswer = async () => {
    try {
           const response = await axios.get('https://hapi.fhir.org/baseR4/QuestionnaireResponse')
           setAnswerData(response?.data)
           

    } 
    catch (error) {
      console.log(error)
    }
 }

 console.log(answerData, 'Response Data')
 

  useEffect(()=>{
      fetchAnswer()
  },[]) 
  


  return (
    <div>
      <div>
        {answerData?.resource?.map((answer,id)=>{
          <Typography>Person Answering</Typography>
          
        })}
        
      </div>
    </div>
  )
}

export default Answers
