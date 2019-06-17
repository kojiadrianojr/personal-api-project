const apis = {
    characters,
    locations,
    episode,
    quotes,
};

var ele;
var epiChar = [];
var randomN;
var currPage;


const randomChar = () => {
    randomN = Math.floor(Math.random() * 394 - 1) + 1;
    return randomN;
};

$(document).ready(function() {
    $('#more-char').trigger('click')

    const dispSeason = (() => {
        var $seasonSelect = $('#sel-season');
        maxPage.then(res => {
            for (i = 1; i <= res; i++) {
                $seasonSelect.append(
                        `
                     <option value="${i}">Season: ${i}</option>
                    `
                    )
                    //.trigger('change');
            }
        })
    })();



    $('#sel-season').change(function() {
        let season = $('#sel-season').val()
        episode.getPage(season).then(season => {
            var episodes;
            $('#sel-episode').html(season.results.map(epis => {
                    episodes = epis.name
                    return `<option value="${episodes}">${episodes}</option>`
                }).join(''))
                .trigger('change')

        })
    })

    $('#sel-episode').change(function() {
        let episodes = $('#sel-episode').val()
        var data = [];
        episode.get(episodes)
            .then(epi => {
                data.push(...epi.results)
                return data
            })
            .then(res => data[0].characters)
            .then(char => {
                $('.char-box').html(char.map(url => {
                    return renderChar(url)
                        .then(char => {
                            img = char.image;
                            name = char.name;
                            status = char.status;
                            species = char.species;
                            type = char.type;
                            origin = char.origin.name;
                            $('.char-box').append(`
                                <div class="char-mini">
                                    <img src="${img}">
                                <h3>Information</h3>
                                <p>
                                Name: ${name} <br>
                                Status: ${status} <br>
                                Species: ${species} <br>
                                Type: ${type} <br>
                                Origin: ${origin} <br>
                                </p>
                            </div>
                                `)
                        })
                }))
            });
    });

    const disLoc = (() => {
        var locSel = $('#sel-loc');
        locMaxPage.then(res => {
            for (var i = 1; i <= res; i++) {
                locations.getPage(i)
                    .then(loc => loc.results)
                    .then(res => {
                        res.map(info => {
                            $('#sel-loc').append(`
                            <option value="${info.name}">${info.name}</option>`)
                        })
                    })
            }
        })
    })();

    $('#sel-loc').change(function() {
        let location = $('#sel-loc').val();
        locations.get(location)
            .then(arr => arr.results)
            .then(res => {
                $('.char-box').html(res[0].residents.map(url => {
                    return renderChar(url)
                        .then(char => {
                            console.log(char == null)

                            img = char.image;
                            name = char.name;
                            status = char.status;
                            species = char.species;
                            type = char.type;
                            origin = char.origin.name;
                            $('.char-box').append(`
                            <div class="char-mini">
                                <img src="${img}">
                                <h3>Information</h3>
                                <span>Name: ${name} </span>
                                <span>Status: ${status}  </span> 
                                <span>Species: ${species}</span> 
                                <span>Type: ${type} </span> 
                                <span>Origin: ${origin} </span>
                            </div>
                                `)
                        })
                }))
            })

    });

});



$('#more-char').click(function(e) {
    const getRandomChar = (() => {
        var $right = $('.right-char-cont');
        var $infoHere = $('#info-here');
        randomN = Math.floor(Math.random() * 493 - 1) + 1;
        characters.get(randomN)
            .then(res => {
                $right.html(`
                <img id="char-info" class="hvr-float-shadow" src="${res.image}">
                <p id="char-info" class="orbitron hvr-bubble-float-left"><strong>${res.name}</strong><br><span>Click for info!</span></p>
                
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

const maxPage = (() => {
    return episode.getInfo()
        .then(res => res)
        .then(arr => arr.info)
        .then(info => info.pages)
})();

const locMaxPage = (() => {
    return locations.getInfo()
        .then(res => res)
        .then(arr => arr.info)
        .then(info => info.pages)
})();



const renderChar = (url) => {
    return fetch(url)
        .then(res => res.json())
}


/*
quotes.get().then(res => {
    $('.left').append(`
        <p class="dancing">"${res.data}"</p>
    `)
})

*/