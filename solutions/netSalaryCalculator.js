function speedDetector(speed) {
    const speedLimit = 70; // Speed limit in km/h
    const kmPerPoint = 5; // Every 5 km/h above the limit = 1 demerit point

    if (speed <= speedLimit) {
        console.log("Ok"); // Within the speed limit
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint); // Calculate demerit points
        console.log(`Points: ${points}`);

        if (points > 12) {
            console.log("License suspended"); // More than 12 points = suspension
        }
    }
}

// Get user input and convert it to a number
let speed = Number(prompt("Enter car speed: "));
speedDetector(speed);

