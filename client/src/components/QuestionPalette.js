import React from 'react';
import styled from 'styled-components';

const QuestionPaletteWrapper = styled.div`
  position: fixed;
  top: 70px;
  left: 20px;
  width: 200px;
  height: 300px;
  background-color: #f5f8fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-size: 16px;
`;

const Legend = styled.p`
  color: #5296dd;
`;

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const QuestionItem = styled.li`
  margin-bottom: 5px;
`;

const QuestionLink = styled.a`
  text-decoration: none;
  color: #5296dd;

  &.completed {
    color: #00ff00;
  }
`;

const QuestionPalette = () => {
  return (
    <QuestionPaletteWrapper>
      <Legend>Red: Not Attempted</Legend>
      <Legend>Blue: Attempted</Legend>
      <QuestionList>
        <QuestionItem>
          <QuestionLink href="#" className="completed">
            Question 1
          </QuestionLink>
        </QuestionItem>
        <QuestionItem>
          <QuestionLink href="#">Question 2</QuestionLink>
        </QuestionItem>
        <QuestionItem>
          <QuestionLink href="#">Question 3</QuestionLink>
        </QuestionItem>
        <QuestionItem>
          <QuestionLink href="#">Question 4</QuestionLink>
        </QuestionItem>
        {/* Add more question links as needed */}
      </QuestionList>
    </QuestionPaletteWrapper>
  );
};

export default QuestionPalette;
