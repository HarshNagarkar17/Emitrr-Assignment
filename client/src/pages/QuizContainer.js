// src/components/QuizContainer.js
import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar';
import { ScoreIndicator } from '../components/ScoreIndicator';
import QuestionPalette from '../components/QuestionPalette';

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
  return (
    <Container>
    <NavBar/>
    <ScoreIndicator/>
    <QuestionPalette/>
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
