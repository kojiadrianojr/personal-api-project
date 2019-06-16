const episode = (() => {
    function all() {
        return rAmAPI
            .get('episode')
            .then(eps => eps.results)
            .catch(err => console.log(err))
    }

    function get(epi) {
        return rAmAPI.get(`episode/?name=${epi}`);
    }

    function getPage(page) {
        return rAmAPI.get(`episode/?page=${page}`);
    }

    function getInfo() {
        return rAmAPI.get(`episode`);
    }
    return {
        all,
        get,
        getPage,
        getInfo,
    }
})();