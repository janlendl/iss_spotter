const { 
  fetchMyIP,
  fetchCoordsByIP
 } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!: ', error);
//     return; 
//   }

//   console.log('It worked! Returned IP: ', ip);
// });

fetchCoordsByIP('Invalid', (error, data) => {
  if (error) {
    console.log('It didn\'t work!: ', error);
    return;
  }
  console.log(error, data);
});