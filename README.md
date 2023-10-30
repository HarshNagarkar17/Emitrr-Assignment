# Language Learning Game

The Language Learning Game is an interactive web application designed to
help users improve their language proficiency through a series of
interactive exercises and activities. This README file provides an
overview of the project, its features, and instructions for setting it
up and running it on your local machine.

## Table of content

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)

## Features

- Frontend: A user-friendly and interactive frontend for language learning exercises
- Backend: Backend Development - Backend APIs to handle language learning logic, exercise scoring, and user authentication.
-  Database Management - A database to store user language proficiency levels, progress, and exercise data.
- Language Selection - Users can choose the language they want to learn from a list of available languages
- Scoring and Progress Tracking - A scoring system to evaluate user performance in each exercise (0-5) based on question difficulty.
- Leaderboard - A leaderboard to display top-performing users, encouraging competition and engagement.
- Quiz Question Pattern - Adaptive question selection based on user performance. Easier questions for struggling users, harder questions for proficient users.
- User Profile and Settings - User profile page to view progress and update language preferences. - Option to reset progress if users want to start over.

## Technologies

- **Frontend**: React for building the user interface.
- **Backend**: Node.js with Express for building the API.
- **Authentication**: JWT (JSON Web Tokens) for user authentication.
- **Database Management**: Mongoose for MongoDB interaction.

## Setup

To run this project on your local machine, follow these steps:

Clone the repository to your local machine:

```bash
git clone https://github.com/<your-username>/Emitrr-Assignment
```

Navigate to the project directory:

```bash
cd Emitrr-Assignment
```

Install required dependencies for both client and server

```bash
npm i
```

Create a \`.env\` file in the server directory and set the following environment variables:

```bash
PORT = 
URI = mongodburi
SECRET = secretForJWT
EMAIL_ID = forNodemailer
EMAIL_PASSWORD = forNodemailer 
```





