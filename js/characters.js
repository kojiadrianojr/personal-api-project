const characters = (() => {
    function all() {
        return rAmAPI
            .get('character')
            .then(chars => chars.results)
            .catch(err => console.log(err))

    }

    function get(character) {
        return rAmAPI.get(`character/${character}`);
    }

    function getMul(count) {


    }
    return {
        all,
        get,
        getMul,
    }
})();