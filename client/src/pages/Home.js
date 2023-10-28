// src/components/QuizContainer.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import config from "../config/keys";

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
const QuizContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const QuizCard = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-right: 20px;
`;

const QuizTitle = styled.h3`
  font-size: 20px;
  color: #5296dd;
`;

const QuizDescription = styled.p`
  margin-top: 10px;
`;

const StartQuizLink = styled.a`
  text-decoration: none;
  color: #5296dd;
`;

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const who = localStorage.getItem("who");  // fetching the jwt auth token
    if (!who)
      return navigate("/login");
    try {
      const token = JSON.parse(who);
      let data = {};
      data.token = token;
      const headers = {
        'Authorization': `Bearer ${data.token}`,
        'Content-Type': 'application/json'
      };

      axios.post(`${config.api}/home`,{}, { headers })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response)
        })
    } catch (error) {
      alert("not able to sign you in! please login again");
      navigate("/login");
    }
  }, [])

  return (
    <Container>
      <NavBar />
      <QuizContainerWrapper>
        <QuizCard>
          <QuizTitle>Beginner Quiz</QuizTitle>
          <QuizDescription>Test your knowledge at a beginner level.</QuizDescription>
          <StartQuizLink href="quiz.html">Start Quiz</StartQuizLink>
        </QuizCard>
        <QuizCard>
          <QuizTitle>Intermediate Quiz</QuizTitle>
          <QuizDescription>Challenge yourself with intermediate-level questions.</QuizDescription>
          <StartQuizLink href="#">Start Quiz</StartQuizLink>
        </QuizCard>
        <QuizCard>
          <QuizTitle>Experienced Quiz</QuizTitle>
          <QuizDescription>Prove your expertise with advanced questions.</QuizDescription>
          <StartQuizLink href="#">Start Quiz</StartQuizLink>
        </QuizCard>
      </QuizContainerWrapper>
    </Container>
  );
};

