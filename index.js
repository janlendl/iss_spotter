const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!: ', error);
//     return;
//   }

//   console.log('It worked! Returned IP: ', ip);
// });

// fetchCoordsByIP('ip', (error, coordinates) => {
//   if (error) {
//     console.log('It didn\'t work!: ', error);
//     return;
//   }
//   console.log(error, coordinates);
// });

// const coords = { latitude: '51.0927', longitude : '-114.2017'};

// fetchISSFlyOverTimes(coords, (error, flyBy) => {
//   if (error) {
//     console.log('It didn\'t work!: ', error);
//     return;
//   }
//   console.log('It worked! Return flyover times: ', flyBy);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('It didn\'t work! ', error);
  }
  printPassTime(passTimes);
});

const printPassTime = passTimes => {
  passTimes.forEach(element => {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(element.risetime);
    const duration = element.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  });
};