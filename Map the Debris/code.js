function calcOp(avgAlt) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var R = earthRadius + avgAlt

    return Math.round(Math.sqrt(((4 * Math.pow(Math.PI, 2)) / GM) * Math.pow(R, 3)))

}

function orbitalPeriod(arr) {
    return arr.map((value, index) => {
        return {
            name: value.name,
            orbitalPeriod: calcOp(value.avgAlt)
        }
    });
}

console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));