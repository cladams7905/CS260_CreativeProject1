var id = "";
var artist = "";

if (window.location.href.includes("artist1.html")) {
    artist = "onerepublic";
    id = "one-republic-albums";
} else if (window.location.href.includes("artist2.html")) {
    artist = "ed sheeran";
    id = "ed-sheeran-albums";
} else if (window.location.href.includes("artist3.html")) {
    artist = "blake shelton";
    id = "blake-shelton-albums";
}

const url = "https://theaudiodb.com/api/v1/json/2/discography.php?s="+artist;

console.log(url);

fetch(url)
.then(function(response){
    return response.json();
}).then(function(json) {
    console.log(json);
    let results = "";
    results += "<table class='album-list'>";
    results += "<tr>";
    results += "<th>Album Name</th>";
    results += "<th>Year Released</th>";
    results += "</tr>";
    for (var i = 0; i < json.album.length; i++) {
        results += "<tr>";
        results += "<td>" + json.album[i].strAlbum + "</td>";
        results += "<td>" + json.album[i].intYearReleased + "</td>";
        results += "</tr>";
    }
    results += "</table><br><br>";
    
    document.getElementById(id).innerHTML = results;
});

