// src/components/QuizContainer.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar';
import config from "../config/keys"
import axios from "axios";
import { ScoreIndicator } from '../components/ScoreIndicator';
import { useParams, useNavigate } from "react-router-dom"
import QuestionPalette from '../components/QuestionPalette';
import { auth } from '../providers/auth';

const QuizContainerWrapper = styled.div`
  width: 800px;
  height: fit-content;
  margin-top: 10px;
  margin-left:12%;
  margin-right: 8%;
  padding: 20px;
  background-color: #f5f8fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Container = styled.div`
    font-family: "Arial", sans-serif;
    background-color: #f5f8fa; /* Light gray background */
    color: #000; /* Black text color */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`
const Title = styled.h2`
  font-size: 24px;
  color: #5296dd;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Label = styled.label`
  display: block;
  margin: 5px 0;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  background-color: #ff6314;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0550d;
  }
`;

const QuizContainer = () => {
  const { languagePreference, level } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const user = auth();
    if (!user) navigate("/login");

    axios.post(`${config.api}/who`,{}, {headers:user.headers})
      .then((res) => {
        const user = res.data.user;
        if(user.languagePreference !== languagePreference) {
          alert("This language doesn't belong to your choice!")
          navigate("/");
        }

        const canAccessIntermediate = user.score <= 50;
        const canAccessExperienced = user.score <= 100;
        if(level === "intermediate" && canAccessIntermediate){
          alert("You are not eligible for this level!")
          navigate("/");
        }

        if(level === "experienced" && canAccessExperienced){
          alert("You are not eligible for this level!")
          navigate("/");
        }

      })
    

  }, [])
  return (
    <Container>
      <NavBar />
      <ScoreIndicator />
      <QuestionPalette />
      <QuizContainerWrapper>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo voluptates animi eos quibusdam voluptatem esse,
        </Title>
        <Options>
          <Label>
            <RadioInput type="radio" name="quiz-option" value="option1" /> Option 1
          </Label>
          <Label>
            <RadioInput type="radio" name="quiz-option" value="option2" /> Option 2
          </Label>
          <Label>
            <RadioInput type="radio" name="quiz-option" value="option3" /> Option 3
          </Label>
          <Label>
            <RadioInput type="radio" name="quiz-option" value="option4" /> Option 4
          </Label>
        </Options>
        <SubmitButton>Submit Answer</SubmitButton>
      </QuizContainerWrapper>
    </Container>
  );
};

export default QuizContainer;
