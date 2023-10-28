// src/components/UserProfile.js
import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/NavBar';

const ProfileContainer = styled.div`
  width: 800px;
  padding: 20px;
  background-color: #f5f8fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Container = styled.div`
    font-family: "Arial", sans-serif;
    background-color: #f5f8fa;
    color: #000;
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

const UserProfileWrapper = styled.div`
  text-align: left;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-weight: bold;
`;

const UserText = styled.p`
  margin: 10px 0;
`;

const ProgressWrapper = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  background-color: #5296dd;
  height: 10px;
  border-radius: 5px;
`;

const ProgressBarInner = styled.div`
  background-color: #ff6314;
  height: 100%;
  border-radius: 5px;
  width: ${({ progress }) => progress};
`;

const UpdateLanguageWrapper = styled.div`
  margin-top: 20px;
`;

const UpdateLanguageLabel = styled.label`
  font-weight: bold;
`;

const LanguageSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-left:4px;
  margin-right:6px;
`;

const UpdateButton = styled.button`
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

export const Profile = () => {
  return (
    <Container>
        <NavBar/>
    <ProfileContainer>
      <Title>User Profile</Title>
      <UserProfileWrapper>
        <Label>Name:</Label>
        <UserText>John Doe</UserText>
        <Label>Email:</Label>
        <UserText>johndoe@example.com</UserText>
        <Label>Progress:</Label>
        <ProgressWrapper>
          <ProgressBar>
            <ProgressBarInner progress="80%"></ProgressBarInner>
          </ProgressBar>
          <UserText>80% completed</UserText>
        </ProgressWrapper>
      </UserProfileWrapper>
      <UpdateLanguageWrapper>
        <UpdateLanguageLabel>Language Preference:</UpdateLanguageLabel>
        <LanguageSelect>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          {/* Add more language options as needed */}
        </LanguageSelect>
        <UpdateButton>Update Language Preference</UpdateButton>
      </UpdateLanguageWrapper>
    </ProfileContainer>
    </Container>
  );
};
