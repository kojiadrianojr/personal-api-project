const apis = {
    characters,
    location,
    episodes,
    quotes,
};

var randomN;
const randomChar = () => {
    randomN = Math.floor(Math.random() * 394 - 1) + 1;
    return randomN;
};

$(document).ready(function() {
    $('#more-char').trigger('click')
})

$('#more-char').click(function(e) {
    const getRandomChar = (() => {
        var $right = $('.right-char-cont');
        var $infoHere = $('#info-here');
        randomN = Math.floor(Math.random() * 493 - 1) + 1;
        characters.get(randomN)
            .then(res => {
                $right.html(`
                <img id="char-info" src="${res.image}">
                <p id="char-info" class="orbitron"><strong>${res.name}</strong><br><span>Click for info!</span></p>
                
                `)
                $infoHere.html(`
                <img src="${res.image}">
                <div>
                <h3>Info</h3>
                <p>
                Name: ${res.name} <br>
                Status: ${res.status} <br>
                Species: ${res.species} <br>
                Gender: ${res.gender} <br>
                Origin: ${res.origin.name} <br>
                Location: ${res.location.name} <br>
                No. of Episode(s): ${res.episode.length}
                </p>       
                `)
            })
    })();
})





/*
quotes.get().then(res => {
    $('.left').append(`
        <p class="dancing">"${res.data}"</p>
    `)
})

*/