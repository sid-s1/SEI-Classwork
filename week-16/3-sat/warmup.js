const startPoint = { name: "General Assembly", location: { lat: -37.818555, long: 144.959076 } };

const locations = [
    { name: "Melbourne Cricket Grounds", location: { lat: -37.819967, long: 144.983449 } },
    { name: "Flagstaff Gardens", location: { lat: -37.810680, long: 144.954352 } },
    { name: "Emporium Melbourne", location: { lat: -37.812433, long: 144.963787 } },
    { name: "City Library", location: { lat: -37.817039, long: 144.965983 } },
    { name: "Southern Cross Station", location: { lat: -37.818281, long: 144.952776 } },
    { name: "Sea Life Melbourne Aquarium", location: { lat: -37.820640, long: 144.958325 } }
];

const calcDistance = (lat, long) => {
    lat = lat / 57.29577951;
    long = long / 57.29577951;
    const latHome = startPoint.location.lat / 57.29577951;
    const longHome = startPoint.location.long / 57.29577951;
    return 1.6 * 3963 * Math.acos((Math.sin(lat) * Math.sin(latHome)) + (Math.cos(lat) * Math.cos(latHome) * Math.cos(longHome - long)));
};

const distances = {};

locations.forEach(place => distances[place.name] = calcDistance(place.location.lat, place.location.long));

let min = Infinity;
let closestPlace = '';

for (const place in distances) {
    if (distances[place] < min) {
        min = distances[place];
        closestPlace = place;
    }
}

console.log(distances);
console.log(closestPlace);
