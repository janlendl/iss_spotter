const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!: ', error);
//     return;
//   }

//   console.log('It worked! Returned IP: ', ip);
// });

// fetchCoordsByIP('Invalid', (error, coordinates) => {
//   if (error) {
//     console.log('It didn\'t work!: ', error);
//     return;
//   }
//   console.log(error, coordinates);
// });

const coords = { latitude: '51.0927', longitude : '-114.2017'};

fetchISSFlyOverTimes(coords, (error, flyBy) => {
  if (error) {
    console.log('It didn\'t work!: ', error);
    return;
  }
  console.log('It worked! Return flyover times: ', flyBy);
});