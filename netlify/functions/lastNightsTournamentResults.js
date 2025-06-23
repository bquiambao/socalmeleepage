import { fetchStartGG } from '../utils/fetchStartGG.js';
import { DateTime } from 'luxon';

const meleeID = 1;
const socalCenterCoordinates = "33.7454725,-117.86765300000002";
const californiaAddrStateCode = "CA";
const zone = 'America/Los_Angeles';
const yesterday = DateTime.now().setZone(zone).minus({ days: 1 }).startOf('day');
const yesterdayTimestamp = Math.floor(yesterday.toSeconds());

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
                        name
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