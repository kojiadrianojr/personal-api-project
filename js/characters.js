const characters = (() => {
    function all() {
        return rAmAPI
            .get('character')
            .then(chars => chars.results)
            .catch(err => console.log(err))
    }

    function getInfo() {
        return rAmAPI
            .get(`character`)
            .catch(err => console.log(err))
    }

    const getPageTotal = () => {
        return characters.getInfo()
            .then(char => char.info)
            .then(info => info.pages)
    }

    const getPage = (n) => {
        return rAmAPI.get(`character/?page=${n}`)
    }

    function get(character) {
        return rAmAPI.get(`character/${character}`);
    }

    function getMul(count) {


    }
    return {
        all,
        getInfo,
        getPageTotal,
        getPage,
        get,
        getMul,
    }
})();