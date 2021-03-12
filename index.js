// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require("./iss");
const { nextISSTimesForMyLocation } = require('./iss');
// const { nextISSTimesForMyLocation } = require("./iss")
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("99.228.27.114", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned coordinates:", coordinates);
// });

// fetchISSFlyOverTimes(
//   { latitude: "43.9379", longitude: "-79.4381" },
//   (error, flyovers) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log("It worked! Returned flyovers:", flyovers);
//   }
// );



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);
  }
  return passTimes;
});
