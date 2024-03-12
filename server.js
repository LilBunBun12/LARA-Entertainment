const express = require("express");
const app = express();
const movie = require('./movies.js');
const axios = require('axios')


app.set("view engine", "ejs");

app.use(express.static(__dirname + '/'));
app.use(express.urlencoded({ extended: true }));

let departure;
let arrival;

// import{arrival,departure} from "./javascript/home.js"
app.get("/", (req, res) => {
    res.render("home");
})

app.get("/Landing",(req,res) =>{
    departure = req.query.departure
    arrival = req.query.arrival
    console.log(req.query);
    res.render("landing");
})

app.get("/Movies",(req,res) =>{
    // axios.get('http://localhost:3000/movieData')
    // .then(respo => {
    //     let mainStr = ''
    //     for(let i = 0; i < respo.data.movies.length; i++){
    //         mainStr += `${respo.data.movies[i].movieName}: ${respo.data.movies[i].duration}\n`
    //     }
    //     console.log(mainStr)
    //     res.send(mainStr)
    // })
    res.render("movie")
})

app.get("/Music",(req,res) =>{
    console.log(req.query);
    res.render("music");
})

app.get("/Podcast",(req,res) =>{
    console.log(req.query);
    res.render("podcast");
})

app.get('/movieData', async (req, res) => {
    let movieData = await movie.getMovies(departure, arrival); // change TRANSFER VALS IN PARAMS
    res.send(movieData)
});

app.post("/submit", (req, res) => {
    const userInput = req.body.userInput;
    console.log("HI")
    res.redirect('/landing'); // Redirect to another route after form submission
});

// app.get("/landing", (req, res) => {
//     res.render("index");
// });

// app.get('/movieData', async (req, res) => {
//     const userInput = req.query.userInput;
//     let movieData = await movie.getMovies(userInput); // passes the userinput to movie funct
//     res.send(movieData);
// });

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
