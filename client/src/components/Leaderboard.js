import React from 'react';
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  width: 800px;
  height: 278px;
  background-color: #f5f8fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-top: 20px;
  padding: 16px;
  overflow: auto;
`;

const LeaderboardTitle = styled.h3`
  font-size: 20px;
  color: #5296dd;
`;

const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TableHeader = styled.th`
  padding: 8px 16px;
  background-color: #5296dd;
  color: #fff;
`;

const TableRow = styled.tr`
  background-color: ${({ even }) => (even ? '#ddd' : 'transparent')};
`;

const TableData = styled.td`
  padding: 8px 16px;
`;

export const Leaderboard = () => {
  return (
    <LeaderboardContainer>
      <LeaderboardTitle>Leaderboard</LeaderboardTitle>
      <LeaderboardTable>
        <thead>
          <TableRow even>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Score</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((rank, index) => (
            <TableRow even={index % 2 === 0} key={rank}>
              <TableData>{rank}</TableData>
              <TableData>Player {rank}</TableData>
              <TableData>{80 - rank}%</TableData>
            </TableRow>
          ))}
        </tbody>
      </LeaderboardTable>
    </LeaderboardContainer>
  );
};

