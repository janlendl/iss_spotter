const request = require("request");
const ipApiUrl = 'https://api.ipify.org/?format=json';

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request(ipApiUrl, (error, response, body) => {
    if (error) callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {

  // request fetch coordinates from API
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) callback(error, null);

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const { longitude, latitude } = JSON.parse(body);
    callback(ip, (null,{longitude, latitude}));
  });


};

module.exports = { 
  fetchMyIP,
  fetchCoordsByIP };