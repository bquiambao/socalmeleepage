import { createContext, useEffect, useState } from 'react';

export const LastNightsTournamentResultsContext = createContext();

export function LastNightsTournamentResultsProvider({ children }) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch('/.netlify/functions/lastNightsTournamentResults');
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      } 
    };

    fetchResults();
  }, []);

  return (
    <LastNightsTournamentResultsContext.Provider value={{results}}>
      {children}
    </LastNightsTournamentResultsContext.Provider>
  );
}