const axios = require('axios')

axios.get('http://localhost:3000/movieData')
.then(res => {
    console.log(res.data)
})