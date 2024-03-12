const axios = require('axios')

/*

PARAMS (DEPARTURE ID, ARRIVAL ID)

RETURNS [HOURS, MINS, TOTAL MINS]

RESOLVES A GET REQ, WILL HAVE TO WAIT FOR RES TO FINISH
---------------------------------------------------------------------
Instructions to use

const getTime = require('./getTime.js')

MUST BE IN AN AYSNC FUNCTION EXAMPLE:

let res;

(async () => {
    res = await getTime('JFK', 'DFW')
    console.log(res)
})

OR

async function main(){
    let res = await getTime.main('DFW', 'JFK')
    console.log(res)
}

*/


async function main(departure, arrival){
    let date = [
        Math.floor(Math.random() * 2) + 2020,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 17) + 10,
    ]
    let res = await axios.get(`https://hackaton-b63c81a22259.herokuapp.com/flights?date=${date[0]}-0${date[1]}-${date[2]}&origin=${departure}&destination=${arrival}`)

    let ranIndex = Math.floor(Math.random() * res.data.length)
    let hours = res.data[ranIndex].duration.hours
    let minutes = res.data[ranIndex].duration.minutes


    return[hours, minutes, (hours * 60) + minutes]
}


module.exports = {
    main
}