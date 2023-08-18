import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {  Route, Routes } from 'react-router-dom';

export default function BasicButtons({dataItem, dataIndex}) {
    const showQuestions = () => {
       <Routes>
          <Route path='/'></Route>
       </Routes>
    }

    return (
 
        
        <Button variant="contained" onClick={showQuestions}></Button>
    
    );
  }