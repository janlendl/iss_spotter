const request = require('request');
const { nextISSTimesForMyLocation } = require('./iss_promised');




nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTime(passTimes);
  })

  .catch((error) => {
    console.log('It didn\'t work', error.message);
  });


  const printPassTime = passTimes => {
    passTimes.forEach(element => {
      const dateTime = new Date(0);
      dateTime.setUTCSeconds(element.risetime);
      const duration = element.duration;
      console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
    });
  };