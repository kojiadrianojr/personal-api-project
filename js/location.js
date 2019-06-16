const locations = (() => {
    function all() {
        return rAmAPI
            .get('location')
            .then(locs => locs.results)
            .catch(err => console.log(err))
    }

    function get(param) {
        return rAmAPI.get(`location/?name=${param}`);
    }

    function getPage(page) {
        return rAmAPI.get(`location/?page=${page}`);
    }

    function getInfo() {
        return rAmAPI.get(`location`);
    }
    return {
        all,
        get,
        getPage,
        getInfo,
    }

})();