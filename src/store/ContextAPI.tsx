import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScoreContextType {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

const scoreContext = createContext<ScoreContextType | undefined>(undefined);

export const ScoreContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [score, setScore] = useState(0);

    return (
        <scoreContext.Provider value={{ score, setScore }}>
            {children}
        </scoreContext.Provider>
    );
};

export const useScore = (): ScoreContextType => {
    const context = useContext(scoreContext);
    if (!context) {
        throw new Error('useScore must be used within a ScoreContextProvider');
    }
    return context;
};

export default scoreContext;
