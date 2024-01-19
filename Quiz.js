import { useState } from "react";
import "./App.css"
import { toBeChecked } from "@testing-library/jest-dom/matchers";
export default function Quiz(){
    const[current,setcurrent]=useState(0)
    const[count,setcount]=useState(0)
    const[result,setresult]=useState(0)
    const[option,setoption]=useState("")
    const[message,setmessage]=useState("")
    const questions = [
        // Easy Questions
        {
          question: "Which sentence is correct?",
          options: [
            "He don't like pizza.",
            "He doesn't like pizza.",
            "He doesn't likes pizza.",
            "He not like pizza.",
          ],
          correctAnswer: "He doesn't like pizza.",
        },
        {
          question: "Choose the correct word:",
          options: ["Apple", "Appel", "Appl", "Aple"],
          correctAnswer: "Apple",
        },
        {
          question: "What is the plural form of 'book'?",
          options: ["Bookes", "Books", "Bookies", "Book"],
          correctAnswer: "Books",
        },
      
        // Intermediate Questions
        {
          question: "Select the correct sentence:",
          options: [
            "She have a lot of friends.",
            "She has many friends.",
            "She having many friends.",
            "She is have many friends.",
          ],
          correctAnswer: "She has many friends.",
        },
        {
          question: "Identify the correct verb form:",
          options: ["Runned", "Running", "Ran", "Runing"],
          correctAnswer: "Running",
        },
        {
          question: "What is the past tense of 'eat'?",
          options: ["Eaten", "Ate", "Eating", "Eat"],
          correctAnswer: "Ate",
        },
      
        // Hard Questions
        {
          question: "Choose the correct sentence with a complex sentence structure:",
          options: [
            "I go to the store.",
            "After I went to the store, I bought some groceries.",
            "I to the store go.",
            "I store the to went.",
          ],
          correctAnswer: "After I went to the store, I bought some groceries.",
        },
        {
          question: "Identify the correct use of a preposition:",
          options: [
            "She went the park with her friends.",
            "She went the park.",
            "She went her friends the park with.",
            "She went to the park with her friends.",
          ],
          correctAnswer: "She went to the park with her friends.",
        },
        {
          question: "What is the correct form of the comparative adjective for 'beautiful'?",
          options: ["Beautifuler", "More beautiful", "Beautifuller", "Beautifulliest"],
          correctAnswer: "More beautiful",
        },
      ];
      
      
    function handlesubmit (){
        if(option===questions[current].correctAnswer){
          setresult((prev)=>prev+10)
          console.log(true)  
        
        }
        setcurrent(current+1)
        setcount((prev)=>prev+1)
        setoption("")
        
    }
    function handleresult(){
      if(result<=10 || result<=30){
        setmessage("Your level is a beginner")
      }else if(result===40 || result===60){
        setmessage("Your level is an intermediate")
      }else if(result===70 || result===80 || result===90){
        setmessage("You're advanced")
      }
    }

    return (
      <div>
        
        <h2 style={{textDecoration:'underline'}} >Quiz:</h2>
        <h1 style={{color:'#00FF00'}}>Test your knowledge:</h1>

        <h2>Question {count} of 10</h2>
        <h2>Result: {result}</h2>

        <h2>{message}</h2>
      <div className="card-container">
        
      <div style={{width:'500px'}} className="card">
        
      <img style={{width:'150px'}} className="logo" src="https://www.fita.in/wp-content/uploads/2020/01/english-fluency.jpg" alt="Logo" />
        
        
          <h3>{questions[current].question}</h3>
        
        
        {questions[current].options.map((opt, index) => (
          <div key={index} className="radio-option">
            <input type="radio"
            checked={option===opt}

              name="options"
              value={opt}
              onChange={(e)=>setoption(e.target.value)}
            />
            <label>{opt}</label>
          </div>
          
        ))}
        <div>
        <button onClick={handlesubmit} >Next</button>
        <button onClick={handleresult}>Check-Result</button>
       </div>
      </div>
      </div>
      </div>
    );
  }
  