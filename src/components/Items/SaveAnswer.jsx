import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SaveAnswer({ questions, setQuestions, id }) {
  const [answer, setAnswer] = useState([]);

  const navigate = useNavigate();

  const save = () => {
    // let keywords = Object.keys(questions)

    // keywords.forEach((key) => {
    //   console.log(questions[key])
    // })

    localStorage.setItem(id , JSON.stringify(questions))
   
    
  };

  return (
    <div>
      <Button onClick={save}>SAVE ANKET</Button>
    </div>
  );
}

export default SaveAnswer;
