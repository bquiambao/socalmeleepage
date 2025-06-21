import { fetchStartGG } from '../utils/fetchStartGG.js';

const meleeID = 1;
const socalCenterCoordinates = "33.7454725,-117.86765300000002";
const californiaAddrStateCode = "CA";
const now = new Date();
const yesterday = new Date(now);
yesterday.setDate(yesterday.getDate() - 1);
yesterday.setHours(0, 0, 0, 0);
const yesterdayTimestamp = yesterday.getTime()/1000;

export async function handler(event, context) {

    const query = `
        query SocalTournaments(
            $coordinates: String!,
            $radius: String!,
            $past: Boolean,
            $publiclySearchable: Boolean,
            $ids: [ID],
            $addrState: String!,
            $afterDate: Timestamp!,
            $page: Int,
            $perPage: Int
        ) {
            tournaments(query: {
                filter: {
                    location: {
                        distanceFrom: $coordinates,
                        distance: $radius
                    },
                    past: $past,
                    publiclySearchable: $publiclySearchable,
                    videogameIds: $ids,
                    addrState: $addrState,
                    afterDate: $afterDate
                }
            }) {
                nodes {
                    id
                    name
                    events(filter: {videogameId: $ids}) {
                        standings(query: {page: $page, perPage: $perPage}) {
                            nodes {
                                placement
                                entrant {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
    const queryVariables = {
        coordinates: socalCenterCoordinates,
        radius: "100mi",
        past: true,
        publiclySearchable: true,
        ids: [meleeID],
        addrState: californiaAddrStateCode,
        afterDate: yesterdayTimestamp,
        page: 1,
        perPage: 3
    };

    const tournamentData = await fetchStartGG(query, queryVariables);
    return {
        statusCode: 200,
        body: JSON.stringify(tournamentData),
    };
}