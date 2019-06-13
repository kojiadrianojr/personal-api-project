const apis = {
    characters,
    location,
    episodes,
    quotes,
};

var randomN = [];
const randomChar = (() => {
    return randomN.push(Math.floor(Math.random() * (394 - 1)) + 1)
})();

const getRandomChar = (() => {
    var $right = $('.right-char-cont');
    var $infoHere = $('#info-here');
    characters.get(randomN)
        .then(res => {
            $right.html(`
            <img src="${res.image}">
            <p id="char-info">${res.name}</p>
            `)
            $infoHere.html(`
            <img src="${res.image}">
            <div><h3>Information</h3>
            <p>
            Name: ${res.name} <br>
            Status: ${res.status} <br>
            Gender: ${res.gender} <br>
            Origin: ${res.origin.name} <br>
            Location: ${res.location.name} <br>
            No. of Episode(s): ${res.episode.length}
            </p>       
            `)
        })
})();





/*
quotes.get().then(res => {
    $('.left').append(`
        <p class="dancing">"${res.data}"</p>
    `)
})

*/