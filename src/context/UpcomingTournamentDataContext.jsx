import { createContext, useEffect, useState } from 'react';

export const UpcomingTournamentDataContext = createContext();

export function UpcomingTournamentDataProvider({ children }) {
  const [tournaments, setTournaments] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const res = await fetch('/.netlify/functions/tournamentsNearby');
        const data = await res.json();
        setTournaments(data?.tournaments?.nodes);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      } 
    };

    fetchTournaments();
  }, []);

  return (
    <UpcomingTournamentDataContext.Provider value={{tournaments}}>
      {children}
    </UpcomingTournamentDataContext.Provider>
  );
}