import React from 'react'
import styled from 'styled-components'
import { NavBar } from '../components/NavBar'
import { QuizResults } from '../components/QuizResults'
import { Leaderboard } from '../components/Leaderboard'

export const Results = () => {

    const Container = styled.div`
    font-family: "Arial", sans-serif;
            background-color: #f5f8fa; /* Light gray background */
            color: #000; /* Black text color */
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            margin: 0;
    `
    return (
        <Container>
            <NavBar/>
            <QuizResults/>
            <Leaderboard/>
        </Container>
    )
}
