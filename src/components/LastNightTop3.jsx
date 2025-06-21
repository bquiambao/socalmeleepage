import {React, useContext} from 'react';
import './LastNightTop3.css'
import { LastNightsTournamentResultsContext } from '../context/LastNightsTournamentResultsContext';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function LastNightTop3() {

    const {results} = useContext(LastNightsTournamentResultsContext);

    if (!results) {
        return <></>
    }

    const data = [];
    results.tournaments.nodes.forEach(tournament => {
        const tournamentName = tournament.name;

        tournament.events.forEach(event => {
            const top3 = event.standings.nodes
            .map(s => ({
                placement: s.placement,
                player: s.entrant.name
            }));

            data.push({
                tournament: tournamentName,
                top3
            });
        });
    });

    return (
        <Swiper
            className="top-3-swiper"
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            slidesPerView={1}
        >
            {data.map((d, idx) => (
                <SwiperSlide className="top-3-swiper-slide" key={idx}>
                    <h2> Congrats to the Top 3 of {d.tournament} last night!</h2> <br/>
                    🥇{d.top3[0].player} <br/>
                    🥈{d.top3[1].player} <br/>
                    🥉{d.top3[2].player}
                </SwiperSlide>
            ))}
        </Swiper>
    )

}

export default LastNightTop3;