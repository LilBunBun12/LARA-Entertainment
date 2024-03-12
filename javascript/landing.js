document.getElementById("movie").onclick = function()
{
    console.log("movie")
    window.location.href = `http://localhost:3000/Movies`;
}
document.getElementById("music").onclick = function()
{
    console.log("music")
    window.location.href = `http://localhost:3000/Music`;
}
document.getElementById("podcast").onclick = function()
{
    console.log("podcast")
    window.location.href = `http://localhost:3000/Podcast`;
}