var id = "";
var artist = "";
var shazam_artist = ""
var id_songs = "";
if (window.location.href.includes("artist1.html")) {
    artist = "onerepublic";
    id = "one-republic-albums";
    shazam_artist = "One%20Republic";
    id_songs = "one-republic-songs";
} else if (window.location.href.includes("artist2.html")) {
    artist = "ed sheeran";
    id = "ed-sheeran-albums";
    shazam_artist = "Ed%20Sheeran";
    id_songs = "ed-sheeran-songs";
} else if (window.location.href.includes("artist3.html")) {
    artist = "blake shelton";
    id = "blake-shelton-albums";
    shazam_artist = "Blake%20Shelton";
    id_songs = "blake-shelton-songs";
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

const options = {
    method: 'GET',
	headers: {
    'X-RapidAPI-Key': '33c1f5e4eamsh944298e103a693dp1e1b43jsn658ec8e905c5',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	 }
};

url2 = "https://shazam.p.rapidapi.com/search?term=" + shazam_artist + "&locale=en-US&offset=0&limit=5";
console.log(url2);
fetch(url2, options) 
.then(function(response) {
    return response.json();
}).then(function(json){
    console.log(json);
    let results = "";
    results += "<table class='album-list'>";
    results += "<tr>";
    results += "<th>Song Name</th>";
    results += "<th>Track Information</th>"
    results += "</tr>";
    for(var i = 0; i < json.tracks.hits.length; i++) {
        results += "<tr>";
        results += "<td>" + json.tracks.hits[i].track.title + "</td>";
        var shazam_link = json.tracks.hits[i].track.url;
        results += "<td>" + "<a href= " + shazam_link + "> Shazam Website</a>";
        results += "</tr>";
    }
    results += "</table><br><br>";
    console.log(results)
    
    document.getElementById(id_songs).innerHTML = results;
});
	    

