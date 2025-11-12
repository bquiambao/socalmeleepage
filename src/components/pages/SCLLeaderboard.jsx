import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SCLLeaderboard.css';
import Papa from 'papaparse';

function SCLLeaderboard(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRan4R2AuqG2B7yuMBL8qyFv4DN1DpQYQJ1N-jEzlX89DN9u0e0SIBfPCOq5s0HyognkXC0BDVGLrQa/pub?gid=1177520278&single=true&output=csv';
  
    // Player and point names
    const COLUMNS = ['Player', 'Pts'];

    useEffect(() => {
        fetch(SHEET_URL)
            .then(res => res.text())
            .then(csv => {
                Papa.parse(csv, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        // Extract only the columns you need
                        const filtered = results.data
                        .map(row => ({
                            [COLUMNS[0]]: row[COLUMNS[0]] || '',
                            [COLUMNS[1]]: row[COLUMNS[1]] || ''
                        }))
                        .filter(row => row[COLUMNS[0]] || row[COLUMNS[1]]);
                        
                        setData(filtered);
                        setLoading(false);
                    }
                    });
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeInOut", 
                delay: 0.2
            }}
        >
            <div className="scl-section">
                <h1>Salami Chud League (SCL) is a high-level invitational tournament in SoCal that uses a points sytem where players can earn points by performing well at locals and qualify into the event.</h1>
                <h2><a href="https://docs.google.com/spreadsheets/d/1QX5Ak7hLrAkhEWkrwxRlpiMOowXnXLz-Ln_OyUlByFk/edit?gid=1177520278#gid=1177520278">More info here</a></h2>
                <br/>
                <h2>Contact self_flagellate on Discord if you have any questions or concerns about points or the current state of the leaderboard.</h2>
                <div className="leaderboard-section">
                    <h1>SCL Point Standings</h1>
                    <table>
                        <tbody>
                            {data.map((row, i) => (
                                <tr key={i}>
                                    <td className="standing">{i + 1} </td>
                                    <td className="standing">{row[COLUMNS[0]]}</td>
                                    <td className="standing">{row[COLUMNS[1]]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    )
}

export default SCLLeaderboard;