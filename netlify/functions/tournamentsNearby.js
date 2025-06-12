import { fetchStartGG } from '../utils/fetchStartGG.js';

const meleeID = 1;
const socalCenterCoordinates = "33.7454725,-117.86765300000002";
const californiaAddrStateCode = "CA";

export async function handler(event, context) {
  const query = "query SocalTournaments($coordinates: String!, $radius: String!, $upcoming: Boolean, $ids: [ID], $imagetype: String!, $addrState: String! ) {tournaments(query: {filter: {location: { distanceFrom: $coordinates, distance: $radius} upcoming: $upcoming videogameIds: $ids addrState: $addrState }}) {nodes {id name venueAddress startAt registrationClosesAt streams{streamName} url images(type: $imagetype){url}}}}";
  const variables = {
        coordinates: socalCenterCoordinates,
        radius: "100mi",
        upcoming: true,
        ids: [meleeID],
        imagetype: "profile",
        addrState: californiaAddrStateCode
    };

  const data = await fetchStartGG(query, variables);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}