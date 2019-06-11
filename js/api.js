const rAmAPI = (function() {
    const rAmURL = 'https://rickandmortyapi.com/api/';

    const handleErr = (err) => {
        if (!err.ok) {
            throw Error(err.statusText)
        } else {
            return err;
        }
    }

    const get = (path) => {
        return fetch(`${rAmURL}/${path}`)
            .then(handleErr)
            .then(res => res.json());
    }
    return {
        get,
    }
})();