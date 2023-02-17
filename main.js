const broadCast = (instructions) => {
    instructions()
};    

const announceRain = ( () => { console.log("Grab an umbrella. It's going to rain today.") } );
const announceClear = ( () => { console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.") } );

const weatherStation = (humidity) => {
    if (humidity >= 95) {
        return broadCast(announceRain)
    } else if (humidity < 95) {
        return broadCast(announceClear)
    }
};

weatherStation(46);
weatherStation(98);