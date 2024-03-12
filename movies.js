const axios = require('axios')
const cheerio = require('cheerio')
const getTime = require('./getTime.js')



async function getMovies(departure, arrival){
    let flightTime = (await getTime.main(departure, arrival))[2]

    let movies = []

    let res = await axios.get(`https://www.imdb.com/list/ls075401331/?sort=list_order,asc&st_dt=&mode=detail&page=${Math.floor(Math.random() * 62) + 1}`, 
    {
        headers : {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'}
    })
    
    const $ = cheerio.load(res.data);
        
    const links = $('.lister-item-content').each((index, value) => {
        let title = $(value).find('.lister-item-header a').text().trim();
        let runTime = ($(value).find('.text-muted.text-small span.runtime').text()).split(' ')[0]

        if(Number(runTime) <= flightTime){
            movies.push([title, runTime])
        }
    })

    return movies
}



module.exports = {
    getMovies
}