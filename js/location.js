const episode = (() => {
    function all() {
        return rAmAPI
            .get('episode')
            .then(eps => eps.results)
            .catch(err => console.log(err))
    }

    function get(epi) {
        return rAmAPI.get(`episode/${epi}`);
    }

    return {
        all,
        get,
    }
})();