import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from '../pages/startPage/StartPage';
import NextPage from '../pages/nextPage/NextPage';
import SecondNext from '../pages/secondNext/SecondNext';
import Instruction from '../pages/instruction/Instruction';
import Game from '../pages/game/Game';
import Result from '../pages/result/Result';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/secondNext" element={<SecondNext />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
